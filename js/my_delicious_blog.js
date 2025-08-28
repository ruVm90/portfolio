document.addEventListener('DOMContentLoaded', () => {
  // Lista de features que tienen imágenes
  const features = ['crud', 'auth', 'roles', 'image', 'buscador', 'pagination', 'seeders'];

  // Precarga inicial
  const imageCache = {};
  features.forEach(f => {
    const img = new Image();
    img.src = `img/Proyectos/my_delicious_blog_details/${f}.png`;
    img.decoding = 'async';
    img.loading = 'lazy';
    imageCache[f] = img;
  });

  // Función para actualizar la imagen
  window.updateImage = function (feature) {
    const featureImg = document.getElementById('feature-img');
    const newSrc = `img/Proyectos/my_delicious_blog_details/${feature}.png`;

    if (imageCache[feature]?.complete) {
      featureImg.classList.add('opacity-0');
      setTimeout(() => {
        featureImg.src = newSrc;
        featureImg.classList.remove('opacity-0');
      }, 300);
    } else {
      const tempImg = new Image();
      tempImg.decoding = 'async';
      tempImg.loading = 'lazy';
      tempImg.onload = () => {
        featureImg.classList.add('opacity-0');
        setTimeout(() => {
          featureImg.src = newSrc;
          featureImg.classList.remove('opacity-0');
        }, 300);
      };
      tempImg.onerror = () => {
        console.warn(`No se pudo cargar la imagen: ${newSrc}`);
      };
      tempImg.src = newSrc;
    }
  };
});
