document.addEventListener("DOMContentLoaded", function() {
    // Funcionalidad del carrusel
    const slider = document.querySelector('.slider');
    const sliderDots = document.querySelector('.slider-dots');
    const sliderSections = document.querySelectorAll('.slider-section');
    let currentSlide = 0;

    // Crear los puntos de navegación dinámicamente
    sliderSections.forEach((section, index) => {
        const dot = document.createElement('div');
        dot.classList.add('slider-dot');
        dot.addEventListener('click', () => goToSlide(index));
        sliderDots.appendChild(dot);
    });

    // Función para cambiar a una diapositiva específica
    function goToSlide(index) {
        currentSlide = index;
        slider.style.transform = `translateX(-${100 * currentSlide}%)`;
        updateDots();
    }

    // Función para actualizar los puntos de navegación
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

    // Mover al siguiente slide cada 5 segundos
    setInterval(() => {
        currentSlide = (currentSlide + 1) % sliderSections.length;
        goToSlide(currentSlide);
    }, 5000);

    // Aseguramos que el primer punto sea activo al cargar
    updateDots();

    // Funcionalidad de los labels en el formulario
    const inputs = document.querySelectorAll('input, textarea');

    // Iteramos sobre cada input y textarea
    inputs.forEach(input => {
        const label = input.previousElementSibling; // Obtenemos el label relacionado con el input

        // Cuando el input o textarea recibe el enfoque
        input.addEventListener('focus', () => {
            label.classList.add('focused'); // Añadimos la clase para mover el label
        });

        // Cuando el input o textarea pierde el enfoque y no tiene valor
        input.addEventListener('blur', () => {
            if (!input.value) {
                label.classList.remove('focused'); // Quitamos la clase si no hay valor
            }
        });

        // Comprobamos si el campo ya tiene contenido (esto es útil si el usuario ya llenó el campo)
        if (input.value) {
            label.classList.add('focused');
        }
    });

    // Configura EmailJS
    const btn = document.getElementById('button');

    document.getElementById('form')
     .addEventListener('submit', function(event) {
       event.preventDefault();
    
       btn.value = 'Enviando...';
    
       const serviceID = 'service_'; /* Colocar el service creado para pastoral */
       const templateID = ''; /* Colocar el template */
    
       emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
          btn.value = 'Mensaje Enviado.';
          alert('Tu mensaje a sido enviado!!! Pronto te enviaremos un mensaje con toda la información necesaria. Muchas gracias.');
        }, (err) => {
          btn.value = 'Send Email';
          alert(JSON.stringify(err));
        });
    });
});
