$(window).on('load', function() {

    $(".loading-overlay .loading-overlay-box").fadeOut(500,
        function() {
            $(this).parent().fadeOut(500);
            $("body").removeClass("overflow")
        });
})


// // Scroll To Top Button 
// var scrollButton = $(".scroll-top");
// $(window).scroll(function() {
//     ($(this).scrollTop() >= 500) ? scrollButton.show(600): scrollButton.hide(600);
// });
// // Click Button to scroll top 
// scrollButton.click(function() {
//     $("html,body").animate({ scrollTop: 0 }, 600);
// });

var wow = new WOW();
wow.init();

$(document).ready(function() {


    //Main Slider Carousel
    $('.main-slider .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1200,
        rtl: true,
        margin: 20,
        navText: ["<span class='fa fa-chevron-right'></span>", "<span class='fa fa-chevron-left'></span>"],
        responsiveClass: true,
        nav: true,
        dots: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 1,
            },
            992: {
                items: 1,
            },
            1200: {
                items: 1,
            }
        }
    });

    var text = $(".select-opt");
    $(".select-opt").click(function() {
        $(this).addClass("rad");
        $(this).addClass("rotate");
        $(".overlay-box").fadeIn(200);
        $(".options-list").slideDown(400);
    });
    $(".overlay-box").click(function() {
        $(".select-opt").removeClass("rad");
        $(".select-opt").removeClass("rotate");
        $(".overlay-box").fadeOut(200);
        $(".options-list").slideUp(400);
    });
    $(".opt-link").click(function() {
        text.text($(this).text());
        $(".select-opt").removeClass("rad");
        $(".select-opt").removeClass("rotate");
        $(".overlay-box").fadeOut(200);
        $(".options-list").slideUp(400);
    });

    $('.banner .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1200,
        margin: 20,
        // stagePadding: 5,
        rtl: true,
        navText: ["<span class='fa fa-chevron-right'></span>", "<span class='fa fa-chevron-left'></span>"],
        responsiveClass: true,
        dots: true,
        nav: true,
        loop: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            768: {
                items: 1,
            },
            992: {
                items: 1,
            }
        }
    });

    if ($(window).width() <= 991) {
        $(".cats .cats-box").addClass("owl-carousel owl-theme");
        $(".cats-box .cat").removeClass("owl-carousel");
        $('.cats .owl-carousel').owlCarousel({
            loop: true,
            margin: 0,
            rtl: true,
            responsiveClass: true,
            nav: false,
            autoplay: true,
            autoplayTimeout: 4000,
            smartSpeed: 1200,
            dots: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2

                }
            }
        })
    } else {
        $(".cats .cats-box").removeClass("owl-carousel");
        $(".cats-box .cat").removeClass("owl-carousel");
    };

    $('.affilites .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1200,
        margin: 20,
        // stagePadding: 5,
        rtl: true,
        navText: ["<span class='fa fa-chevron-right'></span>", "<span class='fa fa-chevron-left'></span>"],
        responsiveClass: true,
        dots: true,
        nav: true,
        loop: true,
        responsive: {
            0: {
                items: 2,
            },
            500: {
                items: 3,
            },
            768: {
                items: 3,
            },
            992: {
                items: 4,
            },
            1200: {
                items: 4,
            },
            1510: {
                items: 5,
            }
        }
    });

    //This is to Open Side Menu in Small Screens
    $(".menu").click(function() {
        $("body").addClass("overflow")
        $(".menu .menu-icon").removeClass("open-menu")
        $(".menu .menu-icon").addClass("close-menu")
        $(".mo-nav").addClass("menu-open");
    });
    $(".close").click(function() {
        $("body").removeClass("overflow")
        $(".menu .menu-icon").addClass("open-menu")
        $(".menu .menu-icon").removeClass("close-menu")
        $(".mo-nav").removeClass("menu-open");
    });

});