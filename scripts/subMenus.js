// JavaScript Document
$(document).ready(function(){
	/*var $btnSubmenu=$(".navLevel1");
	var $submenu=$(".ulLevel2");
	var $notLinked=$(".notlinked");
	var animando=false;
	$submenu.css("display","none");
	$btnSubmenu.has("ul").hover(showSubmenu, hideSubmenu);
	$notLinked.click(function(e){e.preventDefault()});

	function showSubmenu(){
		$(this).children(".ulLevel2").css("display","block");
	}
	function hideSubmenu(){
		$(this).children(".ulLevel2").css("display","none");
	}*/
	$('.myMenu > li').bind('mouseover', openSubMenu);
	$('.myMenu > li').bind('mouseout', closeSubMenu);
		
	function openSubMenu() {
		$(this).find('ul').css('visibility', 'visible');	
	};	
		
	function closeSubMenu() {
		$(this).find('ul').css('visibility', 'hidden');	
	};	
});