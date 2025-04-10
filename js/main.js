$(document).ready(function() {
    // Animación de elementos al hacer scroll
    $(window).scroll(function() {
        $('.fade-in').each(function() {
            var elementTop = $(this).offset().top;
            var viewportTop = $(window).scrollTop();
            var windowHeight = $(window).height();
            
            if (elementTop < (viewportTop + windowHeight - 100)) {
                $(this).addClass('visible');
            }
        });
    });

    // Validación del formulario
    $('#contactForm').on('submit', function(event) {
        event.preventDefault();
        
        if (!this.checkValidity()) {
            event.stopPropagation();
            $(this).addClass('was-validated');
            return;
        }

        // Aquí puedes agregar la lógica para enviar el formulario
        var formData = {
            nombre: $('#nombre').val(),
            email: $('#email').val(),
            mensaje: $('#mensaje').val()
            
        };

        // Simulación de envío exitoso
        alert('¡Gracias por tu mensaje! Te contactaré pronto.');
        this.reset();
        $(this).removeClass('was-validated');
    });

    // Animación suave del scroll
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var target = $(this.hash);
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 55
            }, 1000);
        }
    });

    // Animación de las barras de progreso
    function animateProgressBars() {
        $('.progress-bar').each(function() {
            var width = $(this).css('width');
            $(this).css('width', '0');
            $(this).animate({
                width: width
            }, 1500);
        });
    }

    // Trigger animación de barras de progreso cuando son visibles
    var observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateProgressBars();
                observer.unobserve(entry.target);
            }
        });
    });

    $('.skills').each(function() {
        observer.observe(this);
    });

    // Efecto hover en las tarjetas de proyectos
    $('.card').hover(
        function() {
            $(this).find('.card-body').slideDown();
        },
        function() {
            $(this).find('.card-body').slideUp();
        }
    );
}); 