document.addEventListener("DOMContentLoaded", () => {
    const technologies = [
        { name: "Laravel", logo: "img/Tecnologias/Laravel_logo.png" },
        { name: "PHP", logo: "img/Tecnologias/PHP_logo.png" },
        { name: "MySql", logo: "img/Tecnologias/mysql_logo.png" },
        { name: "Tailwind Css", logo: "img/Tecnologias/TailwindCSS_logo.png" },
        { name: "Html", logo: "img/Tecnologias/html_logo.png" },
        { name: "CSS", logo: "img/Tecnologias/css_logo.png" },
        { name: "Javascript", logo: "img/Tecnologias/Javascript_logo.png" },
        { name: "AJAX", logo: "img/Tecnologias/AJAX_logo.png" },
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
        img.alt = technology.name;
        img.className = `
  w-full h-full object-contain
  transition-transform duration-300 hover:scale-110
`;


        imgContainer.appendChild(img);

        const spacer = document.createElement("div");
        spacer.className = "flex-grow";

        const title = document.createElement("p");
        title.textContent = technology.name;
        title.className = "text-center text-sm font-semibold mt-auto";

        technology_card.appendChild(imgContainer);
        technology_card.appendChild(spacer);
        technology_card.appendChild(title);
        technologiesTab.appendChild(technology_card);
    });

})