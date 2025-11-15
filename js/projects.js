// ==========================================
// PROJECTS.JS - CARDS COMPACTAS Y OPTIMIZADAS
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    const projects = [
        {
            title: "My Delicious Blog",
            photo: "img/Proyectos/my_delicious_blog.png",
            description: "Sistema completo de gestión de recetas con autenticación, roles de usuario y CRUD. Desarrollado con Laravel, MySQL y Tailwind CSS.",
            tags: ["Laravel", "MySQL", "Auth", "CRUD"],
            link: "my_delicious_blog.html",
            lottie: false
        },
        {
            title: "Secure Authentication System",
            photo: "img/Proyectos/secure_authentication_system.png",
            description: "Sistema de autenticación seguro desarrollado con PHP puro. Es un proyecto enfocado en la seguridad contra SQL Injection, XSS, CSRF y Session Fixation.",
            tags: ["PHP", "Security", "PDO", "BCRYPT"],
            link: "secure_authentication_system.html",
            lottie: false
        }
    ];

    const tab_projects = document.getElementById("tab-proyectos");
    
    function crearBotonVerDetalles(url) {
        const actions = document.createElement("div");
        actions.className = "card-actions justify-center mt-4";

        const link = document.createElement("a");
        link.href = url;
        link.className = "btn btn-sm btn-primary transition-transform duration-200 hover:scale-105";

        const text = document.createTextNode("Ver detalles");
        link.appendChild(text);

        // SVG
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        svg.setAttribute("width", "20");
        svg.setAttribute("height", "20");
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

    //  Función para crear tags tecnológicos
    function crearTags(tags) {
        const container = document.createElement("div");
        container.className = "flex flex-wrap gap-2 mt-3 justify-center";


        tags.forEach(tag => {
            const badge = document.createElement("span");
            badge.className = "badge badge-sm badge-outline ";
            badge.textContent = tag;
            container.appendChild(badge);
        });

        return container;
    }

    projects.forEach(project => {
        const card = document.createElement("div");
        
        card.className = "card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300";

        const body = document.createElement("div");
        body.className = "card-body p-2"; 

        
        const figure = document.createElement("figure");
        figure.className = "rounded-lg overflow-hidden bg-gray-800/50 group w-full aspect-video"; 
       

        if (project.lottie) {
            const animContainer = document.createElement("div");
            animContainer.className = "w-full h-full flex items-center justify-center";
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
            
            img.className = "w-full h-full object-contain transition-transform duration-500 group-hover:scale-105";
            img.src = project.photo;
            img.alt = project.title;
            figure.appendChild(img);
        }

        const h2 = document.createElement("h2");
        h2.className = "card-title mt-4 text-xl font-bold text-center w-full block"; 
        h2.textContent = project.title;

        const p = document.createElement("p");
        p.className = "mt-2 px-4 text-gray-300 text-sm leading-relaxed"; 
        p.textContent = project.description;

        // ✅ Tags tecnológicos
        const tags = crearTags(project.tags);

        // Construir card
        body.appendChild(figure);
        body.appendChild(h2);
        body.appendChild(p);
        body.appendChild(tags);
        
        if (project.link !== "#") {
            const button = crearBotonVerDetalles(project.link);
            body.appendChild(button);
        }
        
        card.appendChild(body);
        tab_projects.appendChild(card);
    });
});
