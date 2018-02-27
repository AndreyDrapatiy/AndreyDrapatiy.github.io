/*Owl Sliderrs*/

$(document).ready(function(){
    $('.slide-1').owlCarousel({
        loop:true,
        items:3,
        margin:0,
        autoplay:false,
        autoplayTimeout:2500000000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1152:{

                items:3
            }
        }
    });


});
$(document).ready(function(){
    $('.slide-2').owlCarousel({
        loop:true,
        items:6,
        autoplay:true,
        autoplayTimeout:1500,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:5
            },
            1200:{
                items:6
            }
        }
    });


});


/*Sticky nav*/

$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 2) {
        $(".nav").addClass("darkStaticHeader");
        $(".logo-m-white").addClass("unvisible");
        $(".logo-m-black").addClass("visible");
        $(".logo-white").addClass("logo-black");


    } else {
        $(".nav").removeClass("darkStaticHeader");

        $(".logo-m-white").removeClass("unvisible");
        $(".logo-m-black").removeClass("visible");
        $(".logo-white").removeClass("logo-black");
    }
});

/* scroll to top */

    $(function() {

        $(window).scroll(function() {

            if($(this).scrollTop() != 0) {

                $('#toTop').fadeIn();

            } else {

                $('#toTop').fadeOut();

            }

        });

        $('#toTop').click(function() {

            $('body,html').animate({scrollTop:0},800);

        });

    });

