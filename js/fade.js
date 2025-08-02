document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll('.fade');

    // Detecta cuando un elemento entra en el viewport
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
    window.addEventListener("load", () => {
        document.querySelectorAll(".fade").forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                el.style.animationName = el.dataset.animation || 'fade-up';
                el.classList.add("show");
            }
        });
    });

    elements.forEach(el => observer.observe(el));
})