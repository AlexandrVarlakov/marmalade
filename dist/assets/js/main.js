
$('.low-banners').slick();


$('.hight-banners').slick({
    dots: true,
});


$(document).on('scroll', function(){
    if ( $(window).scrollTop() >= ( $('.header').height()  ) )  {

        if ( $('.header-space').length < 1 ){
            let headerHeight = $('.header').height();
            $('body').prepend('<div class="header-space"></div');
            $('.header-space').css('width', '100%');
            $('.header-space').css('min-height', headerHeight + 'px');
            $('.header-space').css('height', headerHeight + 'px');
        }

        
        

        $('.header').addClass('header_scrolled');

        if ( $('.logo__img').width() > 478 ) {
            $('.h-logo').addClass('h-logo_scrolled')
        }

    } else{
        $('.header-space').remove();
        $('.header').removeClass('header_scrolled');
        $('.h-logo').removeClass('h-logo_scrolled')

    }
})
function disableScroll() {

    // Получить текущую позицию прокрутки страницы

    scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

  

        // при попытке прокрутки установить это значение на предыдущее

        window.onscroll = function() {

            window.scrollTo(scrollLeft, scrollTop);

        };

} 
$('.parent-item').hover( function(){



    

    window.onscroll = disableScroll;

    let headerHeight = $('.header').height();
    let windowHeight = $(window).height();

    let dropMenuHeight = $('.item-drop__inner').height();

    let catTop =   $(this).position().top;
    let catLeft = $(this).position().left;
    let catHeight =  $(this).height();
    let catWidth = $(this).width();
    
    
    


    let coof = 7;
    if ( $('.header').hasClass('header_scrolled') === false){
        coof = 7;

        
    } else {
        
    }


    


    let pt = headerHeight - (catTop + catHeight) + coof;
    

    if ( dropMenuHeight > (windowHeight - headerHeight) ) {
        $('.item-drop__scroll-wrap').css('max-height', ( (windowHeight - headerHeight) + pt)+ 'px');
        
        $('.item-drop__scroll-wrap').css('overflow-y', 'auto');
    }
    
    
    $('.item-drop__triangle').css('left', ( catLeft + ( catWidth / 2) - 25)  + 'px'); 

    $('.item-drop__triangle').css('top', ( headerHeight  - catTop - catHeight) + 'px'); 


    $(this).children('.item-drop').css('padding-top', pt + 'px');

}, function(){
    window.onscroll = function() {}; 
    $(this).children('.item-drop').css('padding-top', '');
    $('.item-drop__scroll-wrap').css('max-height', '');
    
    $('.item-drop__scroll-wrap').css('overflow-y', '');
    $('.item-drop__triangle').css('left', ''); 

    $('.item-drop__triangle').css('top', ''); 

});


$('.hamburger').on('click', function(){
    let headerHeight = $('.header').height();
    let windowHeight = $(window).height();

    let mobMenuHeight = windowHeight - headerHeight;
    let headerTop =   $('.header').position().top;
    

    let mobMenuTop = headerTop + headerHeight;


    if ( $(this).hasClass('hamburger_active') ) {
        $(this).removeClass('hamburger_active');

        
        $('.mob-menu').css('top', '');

        $('.mob-menu__inner').css('height', '');
        $('.mob-menu__inner').css('overflow-y', '');
        $('.mob-menu').css('transform', 'translateX(-100%)');
        window.onscroll = function() {}; 

    } else {
        window.onscroll = disableScroll;


        $(this).addClass('hamburger_active');
        
        $('.mob-menu').css('top', mobMenuTop + 'px');

        $('.mob-menu__inner').css('height', mobMenuHeight + 'px');
        $('.mob-menu__inner').css('overflow-y', 'auto');
        $('.mob-menu').css('transform', 'translateX(0%)');

    }
})

$('.show-all-filters-btn').on('click', function(){
    

    $('.cat-filter-btn_hidden').addClass('cat-filter-btn_show');

    $(this).addClass('cat-filter-btn_hidden');
});

$('.hide-filters-btn').on('click', function(){


    $('.show-all-filters-btn').removeClass('cat-filter-btn_hidden');
    $('.cat-filter-btn_hidden').addClass('hide-filter-btn');
    $('.cat-filter-btn_hidden').hide(300);
    setTimeout(() => {
        $('.cat-filter-btn_hidden').removeClass('cat-filter-btn_show');
        $('.hide-filter-btn').removeClass('hide-filter-btn');
        
    }, 300);

    setTimeout(() => {
        $('.cat-filter-btn_hidden').css('display', '');
    }, 500)
})