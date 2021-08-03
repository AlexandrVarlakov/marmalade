
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

//ВСТАВКА НОВОВСТЕЙ
$('.upload-news').on('click', function(){
    createNews("assets/img/products/news-1.png", 'Наряду с этим антропосоциология транспонирует сенсибельный здравый смысл. Культ джайнизма включает в себя поклонение Махавире и другим тиртханкарам, поэтому конфликт', "#");
    createNews("assets/img/products/news-2.png", 'Наряду с этим антропосоциология транспонирует сенсибельный здравый смысл. Культ джайнизма включает в себя поклонение Махавире и другим тиртханкарам, поэтому конфликт', "#");
})


function createNews(imgLink, shortText, linkToNews){
    $('.news-block__inner').append(
        '<div class="short-news short-news_inserted">'+
            '<div class="short-news__img-block">'+
                '<img class="short-news__img" src="'+imgLink+'" alt="">'+
            '</div>'+
            '<div class="short-news__text-block">'+
                '<p class="short-news__text">'+shortText+'</p>'+
                '<a class="short-news__link" href="'+linkToNews+'">Читать подробнее</a>'+
            '</div>'+
        '</div>'
    );    
}

//вставка yuotube iframe

$('.video-layer').on('click', function(){
    
    if  ( $(this).attr('data-video').length > 0 ) {
        $(this).after($(this).attr('data-video'));
        $(this).attr('data-video', '');
        $('.s-news--prop-block-i').children('iframe').attr('width', "100%");
        $('.s-news--prop-block-i').children('iframe').attr('height', "100%");

        $('.s-news--prop-block-i').children('iframe').on('load', function(){
            $('.video-layer').hide(10);    
        })
    }
    
})


                        
                            
                        
if ( $('.checkbox__input').is(':checked') ){
    $('.checkbox__input').parent().addClass( 'checkbox_checked');
} else {
	
}
                        
$('.checkbox__input').on('click', function(){
    if ( $('.checkbox__input').is(':checked') ){
        $('.checkbox__input').parent().addClass( 'checkbox_checked');
    } else {
        $('.checkbox__input').parent().removeClass( 'checkbox_checked');
    }
})

$('.show-password').on('click', function(){
    let wrap = $(this).parent();

    if ( wrap.hasClass('show-password_hidden') ) {
        wrap.removeClass('show-password_hidden');
        $(this).children('img').attr('title', 'Показать пароль');
        wrap.children('.reg-form__input').attr('type', 'password');
    } else{
        wrap.addClass('show-password_hidden');
        $(this).children('img').attr('title', 'Скрыть пароль');
        wrap.children('.reg-form__input').attr('type', 'text');
    }
})
        

$('.clear-buys-btn').on('click', function(){
    $('.table-buy-list').remove();
    $(this).parent().parent().append('<p class="text">Список покупок пуст </p>');
    $('.clear-buys-block').remove();
    
})
$('.del-cell').on('click', function(){
    let row = $(this).parent();
    let table = row.parent();
    let container = table.parent();
    
    row.remove();
    
    if ( table.children('tr').length == 0){
        $(table).remove();
        $('.clear-buys-block').remove();
        container.append('<p class="text">Список покупок пуст </p>');
    }
});

$('.select-qty').on('click', function(){

    let list = $(this).children('.select-qty__list');
    let listHeight = list.height();

    let currentHeight = $(this).children('.select-qty__current').height();

    let openHeight = listHeight + currentHeight;
    console.log(listHeight, currentHeight, openHeight);
    if ( list.hasClass('select-qty__item-open') ){
        list.removeClass('select-qty__item-open');
        $(this).css('height', '');
    } else{
        list.addClass('select-qty__item-open');
        $(this).css('height', openHeight + 'px');
        
    }
})

$('.select-qty__item').on('click', function(){
    let val = $(this).html();
    $(this).siblings('.select-qty__item').removeClass('select-qty__item_selected');
    $(this).addClass('select-qty__item_selected');
    $(this).parent().siblings('.select-qty__current').html(val);
})


$('.clear-cart').on('click', function(){
    $('.cart__product-item').remove();
    $(this).remove();
    $('.cart__product-list').append('<p class="text">Список покупок пуст </p>');
})

$('.cart__del-product').on('click', function(){
    let item = $(this).parent().parent();
    let list = item.parent();
    
    item.remove();

    if ( list.children().length < 1 ) {
        list.append('<p class="text">Список покупок пуст </p>');
        $('.clear-cart').remove();
    }
})

$('.hidden-radio:checked').parent().addClass('radio-btn_selected');

$('.hidden-radio').on('click', function(){
    $('.radio-btn_selected').removeClass('radio-btn_selected');

    $('.hidden-radio:checked').parent().addClass('radio-btn_selected');
})



//Выпадающий список транспортных компаний

$('.select-del').on('click', function(){

    let list = $(this).children('.select-del__list');
    let listHeight = list.height();

    let currentHeight = $(this).children('.select-del__current').height();

    let openHeight = listHeight + currentHeight;
    
    if ( list.hasClass('select-del__item-open') ){
        list.removeClass('select-del__item-open');
        $(this).css('height', '');
    } else{
        list.addClass('select-del__item-open');
        $(this).css('height', openHeight + 'px');
        
    }
})

$('.select-del__item').on('click', function(){
    let val = $(this).html();
    $(this).siblings('.select-del__item').removeClass('select-del__item_selected');
    $(this).addClass('select-del__item_selected');
    $(this).parent().siblings('.select-del__current').html(val);
    $('#del-company').attr('value', val);
})

$('input:radio[name=region]').on('click', function(){
    switch ( $(this).val() ){
        case '0': 
                $('.delivery-form__delivery-block').css('display', 'none');
                $('.delivery-form__address-block').css('display', 'block');
                break;
        case '1': 
                $('.delivery-form__delivery-block').css('display', 'block');
                $('.delivery-form__address-block').css('display', 'none');
                break;
    }
})
