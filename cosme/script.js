$(function(){

    $('#header_ul .header_li').on({
        'mouseenter':function(){
            $(this)
            .addClass('is-activ')
            .find('.sub_menu_contents').velocity('slideDown',{
                duration: 300
            });
        },
        'mouseleave':function(){
            $(this)
            .removeClass('is-active')
            .find('.sub_menu_contents').velocity('slideUp',{
                duration: 300
            });
        }
    });

    const agree = Cookies.get('cookie-agree');
    const panel = document.getElementById('privacy-panel');
    if(agree === 'yes') {
        document.body.removeChild(panel);
    } else {
        document.getElementById('agreebtn').onclick = function() {
            Cookies.set('cookie-agree', 'yes', {expires: 7});
            document.body.removeChild(panel);
        };
    }

    document.getElementById('agreebtn2').onclick = function() {
    Cookies.remove('cookie-agree');
};
});


$('.slider_ul').slick({
    autoplay: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>',
    dots: true,
    responsive: [
        {
        breakpoint: 769,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    },
    {
        breakpoint: 426,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    }
]
});
