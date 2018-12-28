$(".owl-carousel").owlCarousel({
    loop: true,
    items: 2,
    nav: true,
    pagination: true,
    margin: 15,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        700: {
            items: 2,
        },
        1024: {
            items: 4,
        }
    }
});

$('.buttn_respppn').click(function(){
    $('.cntrl_mmmnu').slideToggle();
});

$('.llnnng').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
   
});
