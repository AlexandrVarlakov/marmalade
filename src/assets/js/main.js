$(document).on('scroll', function(){
    if ( $(window).scrollTop() >= ( $('.page-content__inner').offset().top  -50 ) )  {




      
        $('.header').addClass('header_scrolled');

        if ( $('.logo__img').width() > 478 ) {
            $('.h-logo').addClass('h-logo_scrolled')
        }


        /*
        if ( $('.logo-img').attr('src') !== 'assets/img/color-logo.svg') {
            $('.logo-img').attr('src', 'assets/img/color-logo.svg');
        }


        $('.weather_icon').addClass('weather_color');
            
        */

        console.log('докрутили');
    } else{
        
        $('.header').removeClass('header_scrolled');
        $('.h-logo').removeClass('h-logo_scrolled')
/*
        if ( $('.logo-img').attr('src') !== 'assets/img/light-logo.svg') {
            $('.logo-img').attr('src', 'assets/img/light-logo.svg');
        }

        $('.weather_icon').removeClass('weather_color');*/
    }
})