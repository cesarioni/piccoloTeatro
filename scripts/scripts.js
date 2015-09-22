// JavaScript Document
window.onload = function myFunction() {
	//var loco=document.getElementByClass("imgA");
	//console.log(document.getElementById("jumboImgCont").style.backgroundColor="red");
	//document.getElementById("jumboImgCont").style.left="-50px";
	var posicionCarouselA=document.getElementById("jumboImgCont").style.left;
	console.log(posicionCarouselA);
	posicionCarouselA+=10;
	console.log(posicionCarouselA);
}

function carouselAction(){
	var myVar=setInterval(function(){
			var posicionCarousel=document.getElementById("jumboImgCont").style.left;
			posicionCarousel+=1;
			document.getElementById("jumboImgCont").style.left=posicionCarousel;
		}, 1000);

}
