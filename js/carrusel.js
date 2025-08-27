export function crearCarrusel({ trackSelector, prevBtnSelector, nextBtnSelector, datos, render, visibleSlides = 2 }) {
  const track = document.querySelector(trackSelector);
  const prevBtn = document.querySelector(prevBtnSelector);
  const nextBtn = document.querySelector(nextBtnSelector);

  if (!track || !prevBtn || !nextBtn || !Array.isArray(datos)) {
    console.error("Error al inicializar el carrusel. Verifica los selectores y los datos.");
    return;
  }

  // Crear las tarjetas
  datos.forEach(item => {
    const slide = document.createElement("div");
    slide.className = "flex-shrink-0";
    slide.innerHTML = render(item);
    track.appendChild(slide);
  });

  const slides = Array.from(track.children);
  let currentSlide = 0;

  function getVisibleSlides() {
    // Detecta si es móvil (Tailwind sm = 640px)
    return window.innerWidth < 640 ? 1 : visibleSlides;
  }

  function updateCarousel() {
    const totalSlides = slides.length;
    const visible = getVisibleSlides();

    
    const trackWidth = track.clientWidth;
const gapValue = parseFloat(getComputedStyle(track).gap) || 0;
slides.forEach(slide => {
  slide.style.width = `calc(${100 / visible}% - ${gapValue}px)`;
});


    // Transform para mostrar la slide correcta
    const translateX = (100 / visible) * currentSlide;
    track.style.transform = `translateX(-${translateX}%)`;
  }

  function nextSlide() {
    const visible = getVisibleSlides();
    if (currentSlide < slides.length - visible) {
      currentSlide++;
      updateCarousel();
    }
  }

  function prevSlide() {
    if (currentSlide > 0) {
      currentSlide--;
      updateCarousel();
    }
  }

  prevBtn.addEventListener("click", prevSlide);
  nextBtn.addEventListener("click", nextSlide);

  window.addEventListener("resize", () => {
    currentSlide = 0;
    updateCarousel();
  });

  updateCarousel();
}


