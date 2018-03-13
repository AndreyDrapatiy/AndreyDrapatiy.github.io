// Static header

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 1) {
        $("header").addClass( "header-dark" );
    }
    else if (!($('#hamburger').hasClass( "is-active" ))){
        $("header").removeClass( "header-dark" );
    }
    else if (scroll <= 1 && ($('#hamburger').hasClass( "is-active" ))){}
});

// Static header


//Hamburger toggle/

$('#hamburger').on('click', function () {

    $('#hamburger').toggleClass( "is-active" );

    if ($('#hamburger').hasClass( "is-active" )) {
        $("header").addClass( "header-dark" );
    }
    else $("header").removeClass( "header-dark" );

});

//Hamburger toggle//