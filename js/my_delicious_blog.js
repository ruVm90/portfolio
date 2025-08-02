function updateImage(feature) {
  const featureImg = document.getElementById('feature-img');

  // Oculta con transición
  featureImg.classList.add('opacity-0');

  // Espera a que se desvanezca
  setTimeout(() => {
    // Actualiza imagen
    featureImg.src = `img/Proyectos/my_delicious_blog_details/${feature}.png`;

    // Cuando cargue, muestra con fade-in
    featureImg.onload = () => {
      featureImg.classList.remove('opacity-0');
    };
  }, 300); // duración similar a la transición CSS
}
