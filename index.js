let currentSlide = 0;  // Inicialmente en la primera imagen
const sections = document.querySelectorAll('.slider-section');  // Cada sección es un contenedor de imagen
const totalSlides = sections.length;  // Total de secciones (imágenes)

function showSlide(index) {
    if (index >= totalSlides) {
        currentSlide = 0;  // Si estamos al final, volvemos al inicio
    } else if (index < 0) {
        currentSlide = totalSlides - 1;  // Si estamos al inicio, vamos al final
    } else {
        currentSlide = index;  // Caso normal, pasamos al siguiente slide
    }

    // Mover el contenedor de las imágenes para mostrar la sección correspondiente
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${currentSlide * 800}px)`;  // Usar el ancho de cada sección
}

// Función para mover el slider con las flechas
function moveSlide(direction) {
    showSlide(currentSlide + direction);
}

// Deslizar automáticamente cada 5 segundos
setInterval(() => {
    showSlide(currentSlide + 1); // Desliza a la siguiente sección
}, 5000);

// Inicializa el primer slide
showSlide(currentSlide);
