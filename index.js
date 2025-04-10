let currentSlide = 0;  // Inicialmente en la primera imagen
const sections = document.querySelectorAll('.slider-section');  // Cada sección es un contenedor de imagen
const totalSlides = sections.length;  // Total de secciones (imágenes)
const slider = document.querySelector('.slider');  // Contenedor principal del carrusel
const dotsContainer = document.querySelector('.slider-dots');  // Contenedor de los puntos

// Función para mostrar la imagen correspondiente
function showSlide(index) {
    if (index >= totalSlides) {
        currentSlide = 0;  // Si estamos al final, volvemos al inicio
    } else if (index < 0) {
        currentSlide = totalSlides - 1;  // Si estamos al inicio, vamos al final
    } else {
        currentSlide = index;  // Caso normal, pasamos al siguiente slide
    }

    // Mover el contenedor de las imágenes para mostrar la sección correspondiente
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;  // Usar porcentaje para adaptarlo mejor

    // Actualizar el estado de los puntos
    updateDots();
}

// Función para mover el slider con las flechas (o el siguiente/previo)
function moveSlide(direction) {
    showSlide(currentSlide + direction);
}

// Deslizar automáticamente cada 5 segundos
setInterval(() => {
    showSlide(currentSlide + 1); // Desliza a la siguiente sección
}, 5000);

// Función para crear los puntos de navegación
function createDots() {
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('div');
        dot.classList.add('slider-dot');
        dot.addEventListener('click', () => showSlide(i)); // Al hacer click en el punto, cambiar de imagen
        dotsContainer.appendChild(dot);
    }
}

// Función para actualizar la clase 'active' de los puntos
function updateDots() {
    const dots = document.querySelectorAll('.slider-dot');
    dots.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Inicializa el primer slide y los puntos de navegación
createDots();
showSlide(currentSlide);
