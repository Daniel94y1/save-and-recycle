var musicaImg = document.getElementById('musica vibrante');
var musica2Img = document.querySelector('.musica2-img');

// Agregar un event listener al hacer clic en la música
musicaImg.addEventListener('click', function() {
  // Alternar la visibilidad de las imágenes
  musicaImg.style.display = 'none';
  musica2Img.style.display = 'block';
});

musica2Img.addEventListener('click', function() {
  // Alternar la visibilidad de las imágenes
  musica2Img.style.display = 'none';
  musicaImg.style.display = 'block';
});