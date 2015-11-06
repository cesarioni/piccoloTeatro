// JavaScript Document
$(document).ready(function(){
	$('.flexslider').flexslider({
    animation: "slide", slideshowSpeed: 3000, controlNav: false, animationLoop: true
  });
  $('.flex-next').on('click', function () {
    $('.flexslider').flexslider("play");
	});
	$('.flex-prev').on('click', function () {
		$('.flexslider').flexslider("play");
	});
});
	