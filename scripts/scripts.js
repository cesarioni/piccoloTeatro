
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
		transicion=true;
		console.log(transicion);
		$slider.animate({'margin-left':'-='+width}, animationSpeed, slideOrder);
	}
	
	function slideOrder(){
		currentSlide++;
		if(currentSlide>=$slides.length){
			currentSlide=1;
			$slider.css('margin-left', 0);
		}
		transicion=false;
		console.log(transicion);
	}
	function nextImage(e){
		clearInterval(autoCarInterval);
		if(transicion==false){
			activateSlider();
			createCarouselInterval();
		}
	}
	createCarouselInterval();
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

