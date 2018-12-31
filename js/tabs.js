$(document).ready(function () {
    $(".tabs-menu a").click(function (event) {
        event.preventDefault();
        $(this).parent().addClass("cur-tab");
        $(this).parent().siblings().removeClass("cur-tab");
        var tab = $(this).attr("href");
        $(".links").not(tab).removeClass("cur-panel");
        $(tab).addClass("cur-panel");
    });
});
