$(window).scroll(function () {
    if ($(this).scrollTop() > 106) {
        $(".index-title-wrapper").show(80);
        $(".griffinpixel-wrapper").show(200);
        $(".index-content").addClass("index-content-long");
    }
    else {
        $(".index-title-wrapper").hide(80);
        $(".griffinpixel-wrapper").hide(80);
        $(".index-content").removeClass("index-content-long");
    }
});

