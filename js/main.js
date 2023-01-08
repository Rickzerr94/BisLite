$(function(){

    $('.slider__inner').slick({
        arrows: false,
        dots: true,
    });
    $('.works__inner').slick({
        // arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/slide-left.svg" alt="left"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/slide-right.svg" alt="right"></button>',
    });

});