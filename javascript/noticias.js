
    document.addEventListener('DOMContentLoaded', function() {
        // Obtenemos una referencia a la flecha de arriba y agregamos un evento de clic
        document.getElementById('arrow-up').addEventListener('click', function(event) {
            event.preventDefault(); // Evita el comportamiento predeterminado del enlace
            // Redirige a la página deseada (reemplaza 'pagina_arriba.html' con la URL de la página deseada)
            window.location.href = '../html/consejos.html';
        });

        // Obtenemos una referencia a la flecha de abajo y agregamos un evento de clic
        document.getElementById('arrow-down').addEventListener('click', function(event) {
            event.preventDefault(); // Evita el comportamiento predeterminado del enlace
            // Redirige a la página deseada (reemplaza 'pagina_abajo.html' con la URL de la página deseada)
            window.location.href = '../html/cubos_reciclaje.html';
        });
    });

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
    
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}
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