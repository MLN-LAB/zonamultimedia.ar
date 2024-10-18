document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section');
    const links = document.querySelectorAll('nav a');
    const menuIcon = document.querySelector('.menu-icon'); // Agregado
    const navMenu = document.querySelector('nav ul'); // Agregado

    function showSection(id) {
        sections.forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(id).classList.add('active');
    }

    links.forEach(link => {
        link.addEventListener('click', function () {
            const sectionId = this.id.replace('-link', '');
            showSection(sectionId);
            navMenu.classList.remove('show'); // Ocultar menú al hacer clic
        });
    });

    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            alert(`Gracias por contactarnos, ${name}. Te responderemos pronto.`);
            document.getElementById('contact-form').reset();
        } else {
            alert('Por favor, completa todos los campos del formulario.');
        }
    });

    // Mostrar la sección de servicio técnico al hacer clic en el enlace correspondiente
    document.getElementById('servicio-tecnico-link').addEventListener('click', function () {
        showSection('servicio-tecnico');
    });

    // Agregar funcionalidad al menú hamburguesa
    menuIcon.addEventListener('click', function () {
        navMenu.classList.toggle('show'); // Alternar la clase para mostrar el menú
    });
});
