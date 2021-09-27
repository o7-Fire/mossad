//COPYRIGHT VOLAS171 ALL RIGHTS RESERVED 

function howToContactNexity() {
    alert("Add @Nexity#3107 to discord and dm him and wait 3 month until he reply or join his server then spam ping him or https://o7fire.ml/nexity");
}

$(document).ready(function () {

    // toggle mobile menu
    $('[data-toggle="toggle-nav"]').on('click', function () {
        $(this).closest('nav').find($(this).attr('data-target')).toggleClass('hidden');
        return false;
    });

    // feather icons
    feather.replace();

    // smooth scroll
    var scroll = new SmoothScroll('a[href*="#"]');

    // tiny slider
    $('#slider-1').slick({
        infinite: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
    });

    $('.slider-autoplay-stealth').slick({
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        adaptiveHeight: true,
        fade: true,
    });
    $('.autoplay-slider-1').slick({
        dots: true,
        arrows: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        adaptiveHeight: true,
        customPaging: function (slider, i) {
            return '<div class="bg-white br-round w-1 h-1 opacity-50 mt-5" id=' + i + '> </div>'
        },
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        },
        ]
    });

}); 
