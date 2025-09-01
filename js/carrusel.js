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
  let startX = 0;
  let currentX = 0;
  let isDragging = false;

  function getVisibleSlides() {
    return window.innerWidth < 640 ? 1 : visibleSlides;
  }

  function updateCarousel() {
  const visible = getVisibleSlides();
  const gapValue = parseFloat(getComputedStyle(track).gap) || 0;

  const trackWidth = track.clientWidth;
  const totalGap = gapValue * (visible - 1);
  const slideWidth = (trackWidth - totalGap) / visible;

  slides.forEach(slide => {
    slide.style.width = `${slideWidth}px`;
  });

  const translateX = (slideWidth + gapValue) * currentSlide;
  track.style.transform = `translateX(-${translateX}px)`;
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

  // ✅ Soporte para Swipe en móviles
  track.addEventListener("touchstart", (e) => {
    if (getVisibleSlides() === 1) {
      startX = e.touches[0].clientX;
      isDragging = true;
      track.style.transition = "none"; // Para mover sin animación
    }
  });

  track.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    currentX = e.touches[0].clientX;
    const deltaX = currentX - startX;

    // Desplazar el track en tiempo real (efecto arrastre)
    const visible = getVisibleSlides();
    const translateX = ((100 / visible) * currentSlide) + (deltaX / track.clientWidth) * 100;
    track.style.transform = `translateX(-${translateX}%)`;
  });

  track.addEventListener("touchend", () => {
    if (!isDragging) return;
    isDragging = false;
    track.style.transition = "transform 0.3s ease";

    const deltaX = currentX - startX;
    const threshold = 50; // Umbral en píxeles

    if (deltaX > threshold) {
      prevSlide();
    } else if (deltaX < -threshold) {
      nextSlide();
    } else {
      updateCarousel();
    }
  });

  updateCarousel();
}


