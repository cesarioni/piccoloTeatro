// JavaScript Document
$(document).ready(function(){
	var $btnSubmenu=$(".navLevel1");
	var $submenu=$(".ulLevel2");
	$submenu.css("display","none");
	$btnSubmenu.has("ul").hover(showSubmenu, hideSubmenu);

	function showSubmenu(){
		$(this).children(".ulLevel2").css("display","block");
	}
	function hideSubmenu(){
		$(this).children(".ulLevel2").css("display","none");
	}
});