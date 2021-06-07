$(window).on('resize load orientationchange', function(){
    responsive_calc();
});

var responsive_calc = function(){

    // get the viewport height
    var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    // get the element height
    var bannerHeight = $('.fake-img').height();

    // get the integer percentage value difference between them
    var bgHeightPercent = Math.ceil(bannerHeight/h*100);

    // set background-size height to match the element instead of the viewport
    $('.fake-img').css('background-size', 'auto ' + bgHeightPercent + '%');
}
