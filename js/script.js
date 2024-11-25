// Seleccionar los elementos del carrusel
const items = document.querySelectorAll('.carousel-item'); // Todas las diapositivas
let currentSlide = 0; // Índice de la diapositiva activa

// Cambiar al siguiente slide
function showNext() {
    items[currentSlide].classList.remove('active'); // Quitar clase 'active'
    currentSlide = (currentSlide + 1) % items.length; // Avanzar al siguiente índice
    items[currentSlide].classList.add('active'); // Activar nueva diapositiva
}

// Cambiar al slide anterior
function showPrev() {
    items[currentSlide].classList.remove('active'); // Quitar clase 'active'
    currentSlide = (currentSlide - 1 + items.length) % items.length; // Retroceder al índice anterior
    items[currentSlide].classList.add('active'); // Activar nueva diapositiva
}

// Asignar eventos a los botones
document.querySelector('#prevBtn').addEventListener('click', showPrev);
document.querySelector('#nextBtn').addEventListener('click', showNext);

// Cambio automático cada 5 segundos
setInterval(showNext, 5000);
