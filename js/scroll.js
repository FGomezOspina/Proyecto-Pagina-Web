// Importa jQuery si no lo has hecho antes (asegúrate de que la ruta sea correcta)
// import jQuery from 'ruta/al/jquery';

let lastScrollTop = 0;

$(window).scroll(function() {
    let scrollTop = $(this).scrollTop();

    if (scrollTop > lastScrollTop) {
        // Scrolling hacia abajo
        $('.header').css('top', '-500px'); // Puedes ajustar el valor según sea necesario
    } else {
        // Scrolling hacia arriba
        $('.header').css('top', '0');
    }

    lastScrollTop = scrollTop;

});
