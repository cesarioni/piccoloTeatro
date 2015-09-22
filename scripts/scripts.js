// JavaScript Document
window.onload = function myFunction() {
	//var loco=document.getElementByClass("imgA");
	//console.log(document.getElementById("jumboImgCont").style.backgroundColor="red");
	//document.getElementById("jumboImgCont").style.left="-50px";
}

function carouselAction(){
	var myVar=setInterval(function(){
			var posicionCarousel=parseInt(getStyle(jumboImgCont, "left"));
			posicionCarousel+=100;
			console.log(posicionCarousel);
			document.getElementById("jumboImgCont").style.left=posicionCarousel+"px";
			console.log(getStyle(jumboImgCont, "left"));
		}, 1);

}
function getStyle(elem, property){
		if (getComputedStyle !== 'undefined') {
        	return window.getComputedStyle(elem, null).getPropertyValue(property);
    	} else {
        	return elem.currentStyle[property];
    	}
}
