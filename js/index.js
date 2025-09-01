document.addEventListener("DOMContentLoaded", () => {

  // Cargar la animación de laptop
  lottie.loadAnimation({
    container: document.getElementById('animacion-backend'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: "lottie/animacion_inicio.json"
  });

  // Links y secciones para scroll
  const links = document.querySelectorAll('.nav-link');
  const sections = [...links].map(link => document.querySelector(link.getAttribute('href')));

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

  // Simulación de texto a máquina
  new TypeIt("#typing-text", {
    speed: 100,
    loop: true,
    breakLines: false,
    waitUntilVisible: true,
  })
    .type("Orientado a soluciones eficientes.")
    .pause(1200)
    .delete(35)
    .type("Diseñador de APIs robustas.")
    .pause(1500)
    .delete(28)
    .type("Transformando ideas en código.")
    .pause(1600)
    .delete(31)
    .go();


  // Control de pestañas activas
  const tabs = document.querySelectorAll("#tab-buttons .tab-custom");
  const tabContents = {
    proyectos: document.getElementById("tab-proyectos"),
    certificaciones: document.getElementById("tab-certificaciones"),
    tecnologias: document.getElementById("tab-tecnologias"),
  };

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("tab-active", "border-b-2", "border-primary"));
      Object.values(tabContents).forEach(content => content.classList.add("hidden"));
      tab.classList.add("tab-active", "border-b-2", "border-primary");
      const selected = tab.dataset.tab;
      tabContents[selected].classList.remove("hidden");
    });
  });

  // ----------- MENÚ MÓVIL -----------
  const menuBtn = document.getElementById('menu-btn');
  const closeBtn = document.getElementById('close-menu');
  const mobileMenu = document.getElementById('mobile-menu');
  const linkss = mobileMenu.querySelectorAll('a');

  function openMenu() {
    mobileMenu.classList.remove('-translate-y-full');
    linkss.forEach((link, i) => {
      setTimeout(() => {
        link.style.opacity = 1;
        link.style.transform = 'translateY(0)';
      }, i * 100);
    });
  }

  function closeMenu() {
    mobileMenu.classList.add('-translate-y-full');
    linkss.forEach(link => {
      link.style.opacity = 0;
      link.style.transform = 'translateY(1rem)';
    });
  }

  // Abrir menú
  menuBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Evita que el click llegue al document
    openMenu();
  });

  // Cerrar con botón X
  closeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    closeMenu();
  });

  // Evitar cierre al hacer click dentro del menú
  mobileMenu.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  // Cerrar al hacer click fuera del menú
  document.addEventListener('click', closeMenu);

});
