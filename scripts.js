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
        
        if ($(document).scrollTop() >150) {

            $(".index").addClass("float")
            $(".index-content").addClass("index-fixed")
            // $(".index-table").addClass("invisible");
            // $(".index-table").hide();
            $(".apartment-list.first").css("margin-top", "50px");
            $(".index-content-footer").css("height", "14px");
            // $(".index-table").slideUp(20);
            // $(".index-table").fadeOut(50);
            $(".index-content-title").addClass("title-float");

            $(".fa-arrow-up").show();
            $(".fa-arrow-down").hide();
            // $(".fa-arrow-right").show();

            $(".index").off('click').click(function () { 
            // $(".index-table").removeClass("invisible");
                $(".fa-arrow-up").hide();
                $(".fa-arrow-down").show();
                // $(".fa-arrow-right").show();
                $(".index-table").stop(true).slideToggle(500);

                // if (!$('.index-table').length) {
                //     $(".fa-arrow-up").show();
                //     $(".fa-arrow-down").hide();            
                // }
            });

        } else {
            // $(".apartment-list.first").css("margin-top", "0");
            $(".index-content-footer").css("height", "14px");
            $(".index-content").removeClass("index-fixed")
            $(".index-table").hide();
            $(".fa-arrow-up").hide();
            $(".fa-arrow-down").show();
            // $(".fa-arrow-right").show();

            $(".index").off('click').click(function () { 
                $(".fa-arrow-up").show();
                $(".fa-arrow-down").hide();
                // $(".fa-arrow-right").show();
                $(".index-table").stop(true).slideToggle();
            });

        }

        if ($(document).scrollTop() <= 150) {
            $(".apartment-list.first").css("margin-top", "0");
            $(".index-table").hide();
        }
    }
});