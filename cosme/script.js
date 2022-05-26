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

$(window).on('load',function(){
    $("#loding").delay(1500).fadeOut('slow');
    $("#loding_logo").delay(1200).fadeOut('slow');
});


function PageTopAnime(){
    var scroll = $(window).scrollTop();
    if(scroll >= 200){
        $('#page_top').removeClass('DownMove');
        $('#page_top').addClass('UpMove');
    } else {
        if($('#page_top').hasClass('UpMove')){
            $('#page_top').removeClass('UpMove');
            $('#page_top').addClass('DownMove');
        }
    }

    var wH = window.innerHeight;
    var footerPos = $('.footer').offset().top;
    if(scroll + wH >= (footerPos + 10)){
        var pos = (scroll + wH) - footerPos + 40
        $('#page_top').css('bottom',pos);
    } else {
        if($('#page_top').hasClass('UpMove')){
            $('#page_top').css('bottom','45px');
        }
    }
}

$(window).scroll(function(){
    PageTopAnime();
});

$(window).on('load',function(){
    PageTopAnime();
});

$('#page_top').click(function(){
    $('body,html').animate({
        scrollTop: 0
    },500);
    return false;
});