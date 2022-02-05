$(window).scroll(function () {
    if ($(window).width() > 991) {
        if ($(document).scrollTop() > 106) {
            $(".index-icon-wrapper").show(200);
            $(".index-content").addClass("index-content-long");
        } else {
            $(".index-icon-wrapper").hide(80);
            $(".index-content").removeClass("index-content-long");
        }
    } else if (($(window).width() < 991)) {
        if ($(document).scrollTop() > 50) {

            $(".index").addClass("float")
            $(".index-content").addClass("index-fixed")
            $(".index-table").hide();
            $(".index-content-title").addClass("title-float");

            $(".fa-arrow-up").hide();
            $(".fa-arrow-down").show();

            $(".index-content-container").click(function () { 
                $(".index-table").stop(true).slideToggle();
                // $(".index-table").slideDown();
                $(".fa-arrow-up").show();
                $(".fa-arrow-down").hide();
            });

        } else {
            $(".index-content").removeClass("index-fixed")
        }
    }
});