$(document).ready(function() {
    $(window).scroll(function() {
        if ($(document).scrollTop() > 2500) {
            $("#footer").addClass("show");
        } else {
            $("#footer").removeClass("show");
        }
    });
});