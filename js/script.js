$(document).ready(function(){
    $(".divs div").each(function(e) {
        if (e != 0)
            $(this).hide();
    });

    $(".carousel-control-next").click(function(){
        if ($(".divs div:visible").next().length != 0)
            $(".divs div:visible").next().fadeIn().prev().fadeOut();
        else {
            $(".divs div:visible").fadeOut();
            $(".divs div:first").fadeIn();
        }
        return false;
    });

    $(".carousel-control-prev").click(function(){
        if ($(".divs div:visible").prev().length != 0)
            $(".divs div:visible").prev().fadeIn().next().fadeOut();
        else {
            $(".divs div:visible").fadeOut();
            $(".divs div:last").fadeIn();
        }
        return false;
    });
    
    window.addEventListener('load', function () {
    	  var el = document.querySelectorAll('img.lightense');
    	  Lightense(el);
    	}, false);
});