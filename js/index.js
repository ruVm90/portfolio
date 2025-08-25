document.addEventListener("DOMContentLoaded", () => {

    // Cargar la animacion de laptop
    lottie.loadAnimation({
        container: document.getElementById('animacion-backend'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: "lottie/animacion_inicio.json"
    });

    const links = document.querySelectorAll('.nav-link');
    // Obtengo todas las secciones navegables
    const sections = [...links].map(link => document.querySelector(link.getAttribute('href')));

    // Activa los enlaces segun la posicion del scroll
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

    // Se ejecuta cada vez que se hace scroll
    window.addEventListener('scroll', setActiveLink);
    // Se ejecuta cada vez que se carga la pagina
    window.addEventListener('load', setActiveLink);



    // Simulacion de texto a maquina
    new TypeIt("#typing-text", {
        speed: 100,
        loop: true,
        breakLines: false,
        waitUntilVisible: true,
    })
        .type("Especializado en backend.")
        .pause(1200)
        .delete(26)
        .type("Amante de Laravel y PHP.")
        .pause(1200)
        .delete(25)
        .type("Diseñador de APIs eficientes.")
        .pause(1500)
        .delete(29)
        .type("Siempre listo para nuevos desafíos.")
        .pause(1600)
        .delete(36)
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
})