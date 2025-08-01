document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let width, height;

    // Adapta el canvas al tamaño de la ventana
    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }
    // Cuando se cambia el tamaño de ventana se ejecuta
    window.addEventListener("resize", resize);
    resize();

    // Creo las particulas
    const particles = Array.from({ length: 100 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7
    }));

    function draw() {
        // Dibuja un rectángulo semitransparente negro que cubre todo el canvas. 
        // Esto genera el efecto de “desvanecimiento” de los rastros anteriores de las partículas, 
        // creando una especie de estela.
        ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
        ctx.fillRect(0, 0, width, height);
        
        // Color de las particulas
        ctx.fillStyle = "#38bdf8";
        // Actualiza la posicion de las particulas
        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0 || p.x > width) p.vx *= -1;
            if (p.y < 0 || p.y > height) p.vy *= -1;
            ctx.beginPath();
            ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
            ctx.fill();
        });
        // Pide al navegador que vuelva a ejecutar en el próximo frame de animación,
        // creando un bucle infinito que actualiza y redibuja las partículas.
        requestAnimationFrame(draw);
    }

    draw();
})