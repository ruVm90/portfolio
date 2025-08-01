
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

  function updateCarousel() {
    const totalSlides = slides.length;
    const slideWidth = 100 / visibleSlides;
    const translateX = (100 / totalSlides) * currentSlide;

    track.style.width = `${totalSlides * slideWidth}%`;

    slides.forEach(slide => {
      slide.style.width = `${100 / totalSlides}%`;
    });

    track.style.transform = `translateX(-${translateX}%)`;
  }

  function nextSlide() {
    if (currentSlide < slides.length - visibleSlides) {
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
