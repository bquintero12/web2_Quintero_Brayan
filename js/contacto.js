document.querySelectorAll('.contacto-icono').forEach(icono => {
    icono.addEventListener('click', () => {
        icono.classList.add('rebote');
        setTimeout(() => icono.classList.remove('rebote'), 400); // Duración de la animación
    });
});

document.querySelectorAll('.contacto-icono').forEach(icono => {
    icono.addEventListener('click', function (e) {
        e.preventDefault(); // Evita redirección inmediata
        const url = this.href;

        this.classList.add('rebote');

        setTimeout(() => {
            window.open(url, '_blank'); // Redirige después del rebote
            this.classList.remove('rebote');
        }, 400); // Tiempo igual a la duración de la animación
    });
});