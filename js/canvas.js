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
    
    window.addEventListener("resize", resize);
    resize();

    // Reduce partículas en móviles
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 35 : 100; // 35 en móvil, 100 en desktop
    const particleSpeed = isMobile ? 0.4 : 0.7; // Más lentas en móvil = menos CPU

    // Crear las partículas
    const particles = Array.from({ length: particleCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * particleSpeed,
        vy: (Math.random() - 0.5) * particleSpeed
    }));

    function draw() {
        // Efecto de desvanecimiento
        ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
        ctx.fillRect(0, 0, width, height);
        
        // Color de las partículas
        ctx.fillStyle = "#38bdf8";
        
        // Actualiza la posición de las partículas
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
});