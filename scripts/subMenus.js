// JavaScript Document
$(document).ready(function(){
	var $btnSubmenu=$(".navLevel1");
	var $submenu=$(".ulLevel2");
	var $notLinked=$(".notlinked");
	var animando=false;
	$submenu.css("display","none");
	$btnSubmenu.has("ul").hover(showSubmenu, hideSubmenu);
	$notLinked.click(function(e){e.preventDefault()});

	function showSubmenu(){
		$(this).children(".ulLevel2").css("display","block");
		/*animando=false;
		if(animando==false){
			animando=true;
			$(this).animate({'height':'65px'}, 100, function(){
				$(this).children(".ulLevel2").css("display","block");
				animando=false;
				});
		}*/
	}
	function hideSubmenu(){
		$(this).children(".ulLevel2").css("display","none");
		/*animando=false;
		console.log("logritas");
		if(animando==false){
			animando=true;
			$(this).animate({'height':'15px'}, 100, function(){
			$(this).children(".ulLevel2").css("display","none");
			animando=false;
			});
		}*/
	}
});