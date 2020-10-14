$(window).scroll(function () {
    $('.animation_fade').each(function () {
        var imagePos = $(this).offset().top;
        var imageHeight = $(this).height();
        var topOfWindow = $(window).scrollTop();

        if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {
            $(this).addClass("fade_in");
        } else {
            $(this).removeClass("fade_in");
        }
    });
});