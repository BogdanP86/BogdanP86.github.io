$(document).ready(function(){
	
	/* animate scrolling */

	$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});

    $('input[type="email"]').focus(function() {
        $(this).attr('placeholder', '');
    }).blur(function() {
        $(this).attr('placeholder', 'Email');
    });

    $('input[type="name"]').focus(function() {
        $(this).attr('placeholder', '');
    }).blur(function() {
        $(this).attr('placeholder', 'Name');
    });

    $('input[type="phone"]').focus(function() {
        $(this).attr('placeholder', '');
    }).blur(function() {
        $(this).attr('placeholder', 'Phone Number');
    });

    $('textarea').focus(function() {
        $(this).attr('placeholder', '');
    }).blur(function() {
        $(this).attr('placeholder', 'Message');
    });

	/* show nav-bar on scroll 

	$(window).bind('scroll', function() {
    var height = $(window).scrollTop();
    var pos = $("#section1").position();

    if(height > pos.top) {
        $("#menu-links").addClass("fixed");
        $("#menu-links ul li a").css("color","#000");
    }else{
    	$("#menu-links").removeClass("fixed");
    	$("#menu-links ul li a").css("color","#fff");
    }
});
 */

});

