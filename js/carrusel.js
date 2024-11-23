// Seleccionar los elementos del carrusel
const items = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let currentIndex = 0; // Índice inicial

// Función para mostrar un slide específico
function showSlide(index) {
    // Remover la clase 'active' de todos los slides
    items.forEach(item => item.classList.remove('active'));

    // Ajustar el índice al rango válido (ciclo infinito)
    currentIndex = (index + items.length) % items.length;

    // Añadir la clase 'active' al slide actual
    items[currentIndex].classList.add('active');
}

// Función para mostrar el siguiente slide
function showNext() {
    showSlide(currentIndex + 1);
}

// Función para mostrar el slide anterior
function showPrev() {
    showSlide(currentIndex - 1);
}

// Configurar los botones de navegación
nextBtn.addEventListener('click', showNext);
prevBtn.addEventListener('click', showPrev);

// Cambio automático del carrusel
setInterval(showNext, 5000); // Cambia cada 5 segundos
