$(document).ready(function(){
    
    // SECTION FADE-IN
    $("section").css("display","none");
    $("section").fadeIn(500);

    // NO DRAG
    $("#gnb").addClass("no-drag");

    // STICKY HEADER
    $(window).scroll(function(event){
        var t = $(window).scrollTop();
        if (t > 0) {
            $("#gnb").addClass("sticky");
        } else {
            $("#gnb").removeClass("sticky");
        };
    });
    
    // GNB SUBMENU SHOW & HIDE
    var subMenu = $("#gnb .sub-menu");    
    $("#gnb .main-menu li").hover(function() {
        $(this).find(subMenu).stop().show();
    },function() {
        $(this).find(subMenu).stop().hide();
    });

});