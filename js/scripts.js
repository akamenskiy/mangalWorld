$(document).ready(function () {
    $('.slider').slick({
        dots: true,
        arrows: false
    });

    $("a.list__img").fancybox({
        'transitionIn'	:	'elastic',
        'transitionOut'	:	'elastic',
        'speedIn'		:	600,
        'speedOut'		:	200,
        'overlayShow'	:	false
    });

});