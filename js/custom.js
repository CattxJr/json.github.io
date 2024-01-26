$(document).ready(function() {
    $("#workexpcontent").hide();
    $("#workexp").on("mouseenter", function () {
        $("#workexpcontent").fadeIn();
    }).on("mouseleave", function () {
        $("#workexpcontent").fadeOut();
    });

    $("#extracontent").hide();
    $("#extra").on("mouseenter", function () {
        $("#extracontent").fadeIn();
    }).on("mouseleave", function () {
        $("#extracontent").fadeOut();
    });

    $("#educationcontent").hide();
    $("#education").on("mouseenter", function () {
        $("#educationcontent").fadeIn();
    }).on("mouseleave", function () {
        $("#educationcontent").fadeOut();
    });
});