document.addEventListener("DOMContentLoaded", () => {

  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  let width, height;
  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resize);
  resize();

  const particles = Array.from({ length: 100 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.7,
    vy: (Math.random() - 0.5) * 0.7
  }));

  function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = "#38bdf8";
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
      ctx.fill();
    });

    requestAnimationFrame(draw);
  }

  draw();
  const links = document.querySelectorAll('.nav-link');
  const sections = [...links].map(link => document.querySelector(link.getAttribute('href')));

  links.forEach((link, index) => {
    const section = sections[index];
    if (!section) return; // 🛡️ Evita errores si no existe

    const top = section.offsetTop;
    const height = section.offsetHeight;
  });


  function setActiveLink() {
    const scrollY = window.scrollY + window.innerHeight / 2;

    links.forEach((link, index) => {
      const section = sections[index];
      const top = section.offsetTop;
      const height = section.offsetHeight;

      if (scrollY >= top && scrollY < top + height) {
        link.classList.add('active-link');
      } else {
        link.classList.remove('active-link');
      }
    });
  }

  window.addEventListener('scroll', setActiveLink);
  window.addEventListener('load', setActiveLink);

  // Cargar la animacion de inicio
  lottie.loadAnimation({
    container: document.getElementById('animacion-backend'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: "img/animacion_inicio.json"
  });


  new TypeIt("#typing-text", {
    speed: 100,
    loop: true,
    breakLines: false,
    waitUntilVisible: true,
  })
    .type("Apasionado del backend.")
    .pause(1000)
    .delete(24)
    .type("Fan de Laravel.")
    .pause(1000)
    .delete(17)
    .type("Creador de APIs limpias.")
    .pause(1500)
    .delete(26)
    .type("Listo para nuevos retos.")
    .pause(1500)
    .delete(26)
    .go();

  const elements = document.querySelectorAll('.fade');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const animation = el.dataset.animation || 'fade-up';
      el.style.animationName = animation;
      el.classList.add('show');
    }
  });
}, {
  threshold: 0.1
});

elements.forEach(el => observer.observe(el));


  const tabs = document.querySelectorAll("#tab-buttons .tab-custom");
  const tabContents = {
    proyectos: document.getElementById("tab-proyectos"),
    certificaciones: document.getElementById("tab-certificaciones"),
    tecnologias: document.getElementById("tab-tecnologias"),
  };

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      // Quitar clases activas de todas las pestañas
      tabs.forEach(t => {
        t.classList.remove("tab-active", "border-b-2", "border-primary");
      });

      // Ocultar todo el contenido
      Object.values(tabContents).forEach(content => content.classList.add("hidden"));

      // Activar la pestaña actual
      tab.classList.add("tab-active", "border-b-2", "border-primary");
      const selected = tab.dataset.tab;
      tabContents[selected].classList.remove("hidden");
    });
  });

  const proyects = [
    {
      titulo: "My Delicious Blog",
      photo: "img/Proyectos/my_delicious_blog.png",
      description: "Blog de recetas con login, autenticación y roles de usuario desarrollado con Laravel. Permite crear, editar y buscar recetas de forma intuitiva.",
      link: "#",
      lottie: false
    },
    {
      titulo: "Próximamente",
      photo: "img/Proyectos/Under_construction.json",
      description: "Proyecto en desarrollo....",
      link: "#",
      lottie: true
    }
  ]

  const tab_proyects = document.getElementById("tab-proyectos");
  function crearBotonVerDetalles(url) {
    const acciones = document.createElement("div");
    acciones.className = "card-actions justify-end mt-4";

    const enlace = document.createElement("a");
    enlace.href = url;
    enlace.className = "btn btn-primary transition-transform duration-200 hover:scale-105";

    const texto = document.createTextNode("Ver detalles");
    enlace.appendChild(texto);

    // SVG
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.setAttribute("width", "24");
    svg.setAttribute("height", "24");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("fill", "none");
    svg.setAttribute("stroke", "currentColor");
    svg.setAttribute("stroke-width", "2");
    svg.setAttribute("stroke-linecap", "round");
    svg.setAttribute("stroke-linejoin", "round");
    svg.classList.add("lucide", "lucide-arrow-right", "w-4", "h-4");

    const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path1.setAttribute("d", "M5 12h14");

    const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path2.setAttribute("d", "m12 5 7 7-7 7");

    svg.appendChild(path1);
    svg.appendChild(path2);

    enlace.appendChild(svg);
    acciones.appendChild(enlace);

    return acciones;
  }


  proyects.forEach(proyect => {
    const card = document.createElement("div");
    card.className = "card bg-base-100 shadow-md hover:shadow-xl transition-shadow duration-300";

    const body = document.createElement("div");
    body.className = "card-body";

    const figure = document.createElement("figure");
    figure.className = "rounded-xl overflow-hidden shadow-md group";

    if (proyect.lottie) {
      const animContainer = document.createElement("div");
      animContainer.className = "w-full h-64"; // Altura personalizada
      figure.appendChild(animContainer);

      lottie.loadAnimation({
        container: animContainer,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: proyect.photo // ruta al JSON
      });

    } else {
      const img = document.createElement("img");
      img.className = "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105";
      img.src = proyect.photo;
      img.alt = proyect.titulo;
      figure.appendChild(img);
    }


    const h2 = document.createElement("h2");
    h2.className = "card-title mt-5 text-2xl font-bold";
    h2.textContent = proyect.titulo;

    const p = document.createElement("p");
    p.className = "mt-2 text-gray-300";
    p.textContent = proyect.description;


    // Construir card
    body.appendChild(figure);
    body.appendChild(h2);
    body.appendChild(p);
    if (proyect.link !== "#") {
      const boton = crearBotonVerDetalles(proyect.link);

      body.appendChild(boton);
    }
    card.appendChild(body);
    tab_proyects.appendChild(card);
  });



  const certificaciones = [
    {
      titulo: "Curso JavaScript",
      descripcion: "Curso esencial sobre JavaScript moderno.",
      imagen: "img/Certificaciones/JS_essentials1.png",
    },
    {
      titulo: "AWS Cloud Foundations",
      descripcion: "Fundamentos de la nube de Amazon Web Services.",
      imagen: "img/Certificaciones/AWS_cloud_foundations.png",
    },
    {
      titulo: "Fundamentos de Linux",
      descripcion: "Comandos y uso básico de Linux.",
      imagen: "img/Certificaciones/fundamentos_linux.png",
    },
    {
      titulo: "Introduccion a la ciberseguridad",
      descripcion: "Conceptos clave de seguridad digital.",
      imagen: "img/Certificaciones/introduction_cibersecurity.png",
    },
    {
      titulo: "Fundamentos de Windows 10",
      descripcion: "Uso y gestión de Windows 10.",
      imagen: "img/Certificaciones/fundamentos_windows10.png",
    },

  ];

  const track = document.getElementById("carousel-track");
  const modal = document.getElementById("cert-modal");
  const modalImg = document.getElementById("modal-img");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");

  let currentSlide = 0;

  // Renderizamos las tarjetas
  certificaciones.forEach(cert => {
    const slide = document.createElement("div");
    slide.className = "min-w-[300px] md:min-w-[280px] lg:min-w-[300px] flex-shrink-0";

    slide.innerHTML = `
      <div class="bg-base-100 rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
        <div class="group relative h-64 sm:h-72 md:h-80 flex items-center justify-center bg-gray-800 cursor-zoom-in"
          onclick="document.getElementById('modal-img').src='${cert.imagen}'; document.getElementById('cert-modal').showModal()">
          <img src="${cert.imagen}" alt="${cert.titulo}"
            class="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105" />
        </div>
        <div class="p-4 text-center">
          <h3 class="text-white text-lg font-semibold">${cert.titulo}</h3>
          <p class="text-gray-400 text-sm mt-2">${cert.descripcion}</p>
        </div>
      </div>
    `;

    track.appendChild(slide);
  });

  let slides = Array.from(track.children);

  function getVisibleSlides() {
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 768) return 2;
    return 3;
  }

  function updateCarousel() {
    const visible = getVisibleSlides();
    const percentage = 100 / visible;
    track.style.transform = `translateX(-${currentSlide * percentage}%)`;
  }

  function nextSlide() {
    const visible = getVisibleSlides();
    if (currentSlide < slides.length - 1) {
      currentSlide++;
      updateCarousel();
    }
  }

  function prevSlide() {
    if (currentSlide > 0) {
      currentSlide--;
      updateCarousel();
    }
  }

  // Eventos de los botones
  prevBtn.addEventListener("click", prevSlide);
  nextBtn.addEventListener("click", nextSlide);

  // Responsive
  window.addEventListener("resize", () => {
    currentSlide = 0;
    updateCarousel();
  });

  updateCarousel();



  const technologies = [
    { titulo: "Laravel", logo: "img/Tecnologias/Laravel_logo.png" },
    { titulo: "PHP", logo: "img/Tecnologias/PHP_logo.png" },
    { titulo: "MySql", logo: "img/Tecnologias/mysql_logo.png" },
    { titulo: "Tailwind Css", logo: "img/Tecnologias/TailwindCSS_logo.png" },
    { titulo: "Html", logo: "img/Tecnologias/html_logo.png" },
    { titulo: "CSS", logo: "img/Tecnologias/css_logo.png" },
    { titulo: "Javascript", logo: "img/Tecnologias/Javascript_logo.png" },
    { titulo: "AJAX", logo: "img/Tecnologias/AJAX_logo.png" },
  ];

  const technologiesTab = document.getElementById("tab-tecnologias");

  technologies.forEach((technology) => {
    const technology_card = document.createElement("div");
    technology_card.className = `
    bg-base-100 rounded-xl overflow-hidden w-44 h-44 flex flex-col items-center 
    p-4 shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105
  `;

    // Contenedor para centrar la imagen
    const imgContainer = document.createElement("div");
    imgContainer.className = "w-28 h-28 flex items-center justify-center mb-2 overflow-hidden";
    const img = document.createElement("img");
    img.src = technology.logo;
    img.alt = technology.titulo;
    img.className = `
  w-full h-full object-contain
  transition-transform duration-300 hover:scale-110
`;


    imgContainer.appendChild(img);

    const spacer = document.createElement("div");
    spacer.className = "flex-grow";

    const title = document.createElement("p");
    title.textContent = technology.titulo;
    title.className = "text-center text-sm font-semibold mt-auto";

    technology_card.appendChild(imgContainer);
    technology_card.appendChild(spacer);
    technology_card.appendChild(title);
    technologiesTab.appendChild(technology_card);
  });



















});

