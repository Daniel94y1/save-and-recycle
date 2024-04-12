    document.getElementById('arrow-up').addEventListener('click', function(event) {
        event.preventDefault(); // Evita el comportamiento predeterminado del enlace
        window.location.href = '../html/contactanos.html'; // Redirige a la misma página
    });

    document.getElementById('arrow-down').addEventListener('click', function(event) {
        event.preventDefault(); // Evita el comportamiento predeterminado del enlace
        // Redirige a la siguiente página (reemplaza 'siguiente_pagina.html' con la URL de la siguiente página)
        window.location.href = '../html/sobre_juego.html';
    });
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


var audioPlayer = new Howl({
  src: ["../audio/musica.mp3"], // Coloca la ruta correcta de tu archivo de audio
  volume: 1.0,
  html5: true,
  autoplay: false,
  loop: false,
  onend: function () {
    // Callback cuando la reproducción termina
  },
});

var musicButton = document.getElementById("musicButton");
var isPlaying = false;

function togglePlayPause() {
  if (isPlaying) {
    audioPlayer.stop();
    musicButton.src = "../imagenes/musica_off.png";
  } else {
    audioPlayer.play();
    musicButton.src = "../imagenes/musica.png";
  }
  isPlaying = !isPlaying;
}

// Agrega el evento click al botón de música
musicButton.addEventListener("click", togglePlayPause);