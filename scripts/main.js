document.addEventListener("DOMContentLoaded", function() {
    // Código para menú desplegable
    var dropdowns = document.querySelectorAll('.dropdown-toggle');
    dropdowns.forEach(function(dropdown) {
        dropdown.addEventListener('click', function() {
            var menu = this.nextElementSibling;
            menu.classList.toggle('show');
        });
    });

    document.addEventListener('click', function(event) {
        dropdowns.forEach(function(dropdown) {
            if (!dropdown.contains(event.target)) {
                var menu = dropdown.nextElementSibling;
                menu.classList.remove('show');
            }
        });
    });

    // Código para scroll de la página
    window.addEventListener('scroll', function() {
        var navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Suavizar el desplazamiento al hacer clic en enlaces de anclaje
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Configurar el carrusel para una transición suave
    var carouselInner = document.querySelector('.carousel-inner');
    var carouselItems = document.querySelectorAll('.carousel-item');
    var currentIndex = 0;

    function showNextSlide() {
        carouselItems[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % carouselItems.length;
        carouselItems[currentIndex].classList.add('active');
    }

    function showPrevSlide() {
        carouselItems[currentIndex].classList.remove('active');
        currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        carouselItems[currentIndex].classList.add('active');
    }

    document.querySelector('.carousel-control-next').addEventListener('click', showNextSlide);
    document.querySelector('.carousel-control-prev').addEventListener('click', showPrevSlide);
});
