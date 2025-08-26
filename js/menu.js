
const toggleBtn = document.querySelector('.menu-toggle');
const menuList = document.querySelector('.menu ul');

// Mostrar/ocultar menú al hacer clic en el botón
toggleBtn.addEventListener('click', () => {
    menuList.classList.toggle('active');
});

// Cerrar el menú al hacer clic en un enlace
document.querySelectorAll('.menu li a').forEach(link => {
    link.addEventListener('click', () => {
        menuList.classList.remove('active');
    });
});

// Cerrar el menú al hacer clic fuera de él
document.addEventListener('click', (event) => {
    const isClickInsideMenu = menuList.contains(event.target);
    const isClickOnToggle = toggleBtn.contains(event.target);

    if (!isClickInsideMenu && !isClickOnToggle) {
        menuList.classList.remove('active');
    }
});
