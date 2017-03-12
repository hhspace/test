$('.slider-top').owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    items: 1,
    nav: true,
    navText: ["", ""],
    autoplay: true,
    autoplayTimeout: 10000,
    autoplayHoverPause: true
});
$('.main-slider').owlCarousel({
    loop: true,
    margin: 30,
    responsiveClass: true,
    nav: true,
    navText: ["", ""],
    autoplay: true,
    autoplayTimeout: 10000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:2
        },
        1170:{
            items:3
        }
    }
});