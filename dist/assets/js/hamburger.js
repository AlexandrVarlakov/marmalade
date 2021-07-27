$('.hamburger-1').on('click', function(){
    if ( $('.hamburger-1').hasClass('hamburger-1_clicked') ){
        $('.hamburger-1').removeClass('hamburger-1_clicked');
    } else{
        $('.hamburger-1').addClass('hamburger-1_clicked');
    }
});

$('.hamburger-2').on('click', function(){
    if ( $('.hamburger-2').hasClass('hamburger-2_clicked') ){
        $('.hamburger-2').removeClass('hamburger-2_clicked');
    } else{
        $('.hamburger-2').addClass('hamburger-2_clicked');
    }
});