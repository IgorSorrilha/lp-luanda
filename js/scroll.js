$(window).scroll(function(){
	$('nav').toggleClass('scroll', $(this).scrollTop() > 50);
});