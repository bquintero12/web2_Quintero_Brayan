const fotos = [
    "img/carrusel/fotoperfil.jpg",
    "img/carrusel/ftbelen.jpg",
    "img/carrusel/ftgaleriacafe.jpg",
    "img/carrusel/MiEsencia.jpg",
    "img/carrusel/canto.jpg"
];

let indice = 0;
const img = document.getElementById("foto");

setInterval(() => {
    indice = (indice + 1) % fotos.length;
    img.style.opacity = 0;
    setTimeout(() => {
        img.src = fotos[indice];
        img.style.opacity = 1;
    }, 500);
}, 3000);


