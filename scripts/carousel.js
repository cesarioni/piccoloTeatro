// JavaScript Document

$(document).ready(function(){
	//DOM CACHE
	var $slider=$('#slides');
	var $sliderFirst=$('#slides li:first');
	var $sliderLast=$('#slides li:last');
	var $slides=$slider.find('.imgSlide');
	//global variables
	var width=$slides.css("width");
	var animationSpeed=1000;
	var pause=3000;
	var currentSlide=1;
	var transicion=false;
	var negativeMove=false;
	var numImages=$slides.length;
	var lastPosition=$sliderLast.css("left");
	var tempLastPosition=((parseInt(width))*numImages)+"px";
	console.log(lastPosition);
	//buttons events
	$(".jumboNextArrow").on("click",nextImage);
	$(".jumboPrevArrow").on("click",prevImage);
	//functions
	function createCarouselInterval(){
		autoCarInterval=setInterval(activateSlider,pause);
	}
	
	function activateSlider(){
		transicion=true;
		if(negativeMove==false){
			$slider.animate({'margin-left':'-='+width}, animationSpeed, slideOrder);
		}
		if(negativeMove==true){
			if(currentSlide==1){
				displaceNegImage();
			}
			$slider.animate({'margin-left':'+='+width}, animationSpeed, slideOrder);
		}
	}
	
	function slideOrder(){
		if(negativeMove==false){
			currentSlide++;
			if(currentSlide==$slides.length){
				var newPos=(((parseInt(width))*numImages)+"px");
				$sliderFirst.css("left",tempLastPosition);
			}
			if(currentSlide>$slides.length){
				$sliderFirst.css("left","0px");
				$slider.css('margin-left', 0);
				currentSlide=1;
			}
			transicion=false;
		}
		if(negativeMove==true){
			if(currentSlide==1){
				$sliderLast.css("left",lastPosition);
				$slider.css('margin-left', parseInt(lastPosition)*-1);
				$sliderFirst.css("left",tempLastPosition);
				currentSlide=$slides.length;
				negativeMove=false;
				transicion=false;
			}else{
				$sliderFirst.css("left","0px");
				currentSlide--;
				negativeMove=false;
				transicion=false;
			}
		}
	}
	
	function displaceNegImage(){
		if(currentSlide==1){
			
			$sliderLast.css("left","-"+width);
		}
	}
	
	function nextImage(e){
		if(transicion==false){
			clearInterval(autoCarInterval);
			activateSlider();
			createCarouselInterval();
		}
	}
	
	function prevImage(e){
		if(transicion==false){
			negativeMove=true;
			clearInterval(autoCarInterval);
			activateSlider();
			createCarouselInterval();
		}
	}
	
	createCarouselInterval();
	
});
	