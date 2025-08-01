document.addEventListener("DOMContentLoaded", () => {

    // Creacion dinamica de proyectos
    const projects = [
        {
            title: "My Delicious Blog",
            photo: "img/Proyectos/my_delicious_blog.png",
            description: "Blog de recetas con login, autenticación y roles de usuario desarrollado con Laravel. Permite crear, editar y buscar recetas de forma intuitiva.",
            link: "my_delicious_blog.html",
            lottie: false
        },
        {
            title: "Próximamente...",
            photo: "lottie/Under_construction.json",
            description: "Proyecto en desarrollo",
            link: "#",
            lottie: true
        }
    ]

    const tab_projects = document.getElementById("tab-proyectos");
    function crearBotonVerDetalles(url) {
        const actions = document.createElement("div");
        actions.className = "card-actions justify-end mt-4";

        const link = document.createElement("a");
        link.href = url;
        link.className = "btn btn-primary transition-transform duration-200 hover:scale-105";

        const text = document.createTextNode("Ver detalles");
        link.appendChild(text);

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

        link.appendChild(svg);
        actions.appendChild(link);

        return actions;
    }


    projects.forEach(project => {
        const card = document.createElement("div");
        card.className = "card bg-base-100 shadow-md hover:shadow-xl transition-shadow duration-300";

        const body = document.createElement("div");
        body.className = "card-body";

        const figure = document.createElement("figure");
        figure.className = "rounded-xl overflow-hidden shadow-md group";

        if (project.lottie) {
            const animContainer = document.createElement("div");
            animContainer.className = "w-full h-64";
            figure.appendChild(animContainer);

            lottie.loadAnimation({
                container: animContainer,
                renderer: "svg",
                loop: true,
                autoplay: true,
                path: project.photo
            });

        } else {
            const img = document.createElement("img");
            img.className = "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105";
            img.src = project.photo;
            img.alt = project.title;
            figure.appendChild(img);
        }


        const h2 = document.createElement("h2");
        h2.className = "card-title mt-5 text-2xl font-bold";
        h2.textContent = project.title;

        const p = document.createElement("p");
        p.className = "mt-2 text-gray-300";
        p.textContent = project.description;


        // Construir card
        body.appendChild(figure);
        body.appendChild(h2);
        body.appendChild(p);
        if (project.link !== "#") {
            const button = crearBotonVerDetalles(project.link);

            body.appendChild(button);
        }
        card.appendChild(body);
        tab_projects.appendChild(card);
    });
});