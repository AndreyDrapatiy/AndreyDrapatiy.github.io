$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 2) {
        $(".header").addClass("darkStaticHeader");


    } else {
        $(".header").removeClass("darkStaticHeader");

    }
});

