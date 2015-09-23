
$(document).ready(function(){
	var width=960;
	var animationSpeed=1000;
	var pause=3000;
	var currentSlide=1;
	var transicion=false;
	//DOM CACHE
	var $slider=$('#slides');
	var $slides=$slider.find('.imgSlide');
	
	$(".jumboNextArrow").on("click",nextImage);
	//$(".jumboNextArrow").on("click",nextImage());
	
	function createCarouselInterval(){
		autoCarInterval=setInterval(activateSlider,pause);
	}
	
	function activateSlider(){
		$slider.animate({'margin-left':'-='+width}, animationSpeed, slideOrder());
	}
	
	function slideOrder(){
		console.log(currentSlide);
		if(currentSlide>=$slides.length){
			currentSlide=1;
			$slider.css('margin-left', 0);
			console.log("regreso");
		}
		currentSlide++;
	}
	//createCarouselInterval();

	function nextImage(){
		//clearInterval(autoCarInterval);
		activateSlider();
	}
});






/*window.onload = function myFunction() {
	
	
}

function carouselAction(){
	var myVar=setInterval(function(){
			var posicionCarousel=parseInt(getStyle(slides, "margin-left"));
			posicionCarousel+=10;
			console.log(posicionCarousel);
			document.getElementById("slides").style.marginLeft=posicionCarousel+"px";
			//console.log(getStyle(slides, "left"));
		}, 1);

}
function getStyle(elem, property){
		if (getComputedStyle !== 'undefined') {
        	return window.getComputedStyle(elem, null).getPropertyValue(property);
    	} else {
        	return elem.currentStyle[property];
    	}
}*/

