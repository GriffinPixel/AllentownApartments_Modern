$(window).scroll(function () {
    if ($(this).scrollTop() > 106) {
        $(".index-title-wrapper").show(80);
        $(".griffinpixel-wrapper").show(200);
        $(".index-content").addClass("index-content-long");

        // $(".index").addClass("index-fixed")
    }
    else {
        $(".index-title-wrapper").hide(80);
        $(".griffinpixel-wrapper").hide(80);
        $(".index-content").removeClass("index-content-long");
    }
});

$(window).on('resize', function() {
    if ($(window).width() < 991) {
        // $(".griffinpixel-wrapper").hide();
        
        $(".index").addClass("float")
        $(".index-content").addClass("index-fixed")
        $(".index-table").hide();
        $(".index-content-title").addClass("title-float");
        // $(".griffinpixel-index-title").attr("src", "img/home_white.svg")
        $(".index-content").on("click", function () { 
            $(".index-table").stop(true).slideToggle();
        });
    } else { 
        $(".index-content").removeClass("index-fixed")
    }
});



// $(window).on('resize', function() {
//     if ($(window).width() < 991) {
//         if ($(window).scrollTop() > 30) {
//             $(".index").addClass("float")
//             $(".index-content").addClass("index-fixed")
//             $(".index-table").hide();
//             $(".index-content-title").addClass("title-float");
//             $(".index-content").click(function () {
//                 $(".index-table").stop(true).slideToggle();
//             });
//         } else { 
//             $(".index-content").removeClass("index-fixed")
//             $(".index").removeClass("float")
//             $(".index-content-title").removeClass("title-float");
//         }
//     } else { 
//         $(".index-content").removeClass("index-fixed")
//     }
// });


// $(window).on('resize', function () {
//     if ($(this).scrollTop() > 50) {
//         if ($(window).width() < 991) {
//             $(".index").addClass("float")
//             $(".index-content").addClass("index-fixed")
//             $(".index-table").hide();
//             $(".index-content-title").addClass("title-float");
//             $(".griffinpixel-index-title").attr("src", "img/home_white.svg")
//             $(".index-content").click(function () {
//                 $(".index-table").stop(true).slideToggle();
//             });
//         } else {
//             $(".index-content").removeClass("index-fixed")
//         }
//     } else { 
//         $(".index-content").removeClass("index-fixed")
//     }
// });

