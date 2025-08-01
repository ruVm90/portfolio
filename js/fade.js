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

    elements.forEach(el => observer.observe(el));
})