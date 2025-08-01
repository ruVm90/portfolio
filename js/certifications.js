import { crearCarrusel } from './carrusel.js';

document.addEventListener("DOMContentLoaded", () => {
     const certifications = [
    {
      title: "Curso JavaScript",
      description: "Curso esencial sobre JavaScript moderno.",
      image: "img/Certificaciones/JS_essentials1.png",
    },
    {
      title: "AWS Cloud Foundations",
      description: "Fundamentos de la nube de Amazon Web Services.",
      image: "img/Certificaciones/AWS_cloud_foundations.png",
    },
    {
      title: "Fundamentos de Linux",
      description: "Comandos y uso básico de Linux.",
      image: "img/Certificaciones/fundamentos_linux.png",
    },
    {
      title: "Introduccion a la ciberseguridad",
      description: "Conceptos clave de seguridad digital.",
      image: "img/Certificaciones/introduction_cibersecurity.png",
    },
    {
      title: "Fundamentos de Windows 10",
      description: "Uso y gestión de Windows 10.",
      image: "img/Certificaciones/fundamentos_windows10.png",
    },

  ];


  crearCarrusel({
  trackSelector: "#carousel-track",
  prevBtnSelector: "#prev-btn",
  nextBtnSelector: "#next-btn",
  datos: certifications,
  visibleSlides: 2,
  render: cert => `
    <div class="min-w-[300px] md:min-w-[280px] lg:min-w-[300px]">
      <div class="bg-base-100 rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
        <div class="group relative h-64 sm:h-72 md:h-80 flex items-center justify-center bg-gray-800 cursor-zoom-in"
          onclick="document.getElementById('modal-img').src='${cert.image}'; document.getElementById('cert-modal').showModal()">
          <img src="${cert.image}" alt="${cert.title}"
            class="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105" />
        </div>
        <div class="p-4 text-center">
          <h3 class="text-white text-lg font-semibold">${cert.title}</h3>
          <p class="text-gray-400 text-sm mt-2">${cert.description}</p>
        </div>
      </div>
    </div>
  `,
});
})