$(document).ready(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 2500) {
            $("#footer").addClass("show");
        } else {
            $("#footer").removeClass("show");
        }
    });
});

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 100) {
            $(".back_top").css({opacity: 1});
            $('.nav_container').addClass("nav_container-background");
        } else {
            $(".back_top").css({opacity: 0});
            $('.nav_container').removeClass("nav_container-background");
        }
    });
});


// NAV


$('.nav_toggle').on('click', function (e) {

    $('.nav_links').toggleClass("nav_links-visible");
    $('.burger').toggleClass("burger_black");

});