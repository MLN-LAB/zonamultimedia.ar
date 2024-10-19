document.addEventListener('DOMContentLoaded', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');

    mobileMenu.addEventListener('click', function () {
        navList.classList.toggle('active'); // Alternar la clase 'active' para mostrar/ocultar el menú
    });

    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-list a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.id.replace('-link', '');
            sections.forEach(section => {
                section.classList.remove('active');
            });
            document.getElementById(targetId).classList.add('active');
            navList.classList.remove('active'); // Ocultamos el menú al hacer clic en un enlace
        });
    });
});
