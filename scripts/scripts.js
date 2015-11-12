
$(document).ready(function(){
	/*$("#splashScreen").css("background-color","#FFF");
	$("#splashScreen").css("width","100%");
	$("#splashScreen").css("height","100%");
	$("#splashScreen").css("position", "absolute");
	$("#splashScreen").css("z-index","99999");
	$( "#splashImg" ).css("display", "none");
	$( "#splashImg" ).delay( 300 ).fadeIn( 500 );
	$( "#splashScreen" ).delay( 2000 ).fadeOut( 400 );*/
	(function($){
			$(window).load(function(){
				
				$(".makeScroll").mCustomScrollbar({
					theme:"rounded-dark",
				});
				
			});
		})(jQuery);
		
		
		
	$(".socialHoverImg").css("opacity","0");
	
	$( ".socialImg" ).hover(function() {
		$( this ).css("opacity", "0");
		$( this ).parent().children( ".socialHoverImg" ).css("opacity","100");
	});
	$( ".socialImg" ).mouseout(function() {
		$( this ).css("opacity", "100");
		$( this ).parent().children( ".socialHoverImg" ).css("opacity","0");
	});
	
	
	/*
	
	$( ".colorCeldaA" ).hover(function() {
		$( this ).css("background-color", "#FFF");
		console.log("in");
	});
	$( ".colorCeldaA" ).mouseout(function() {
		console.log("out");
		$( this ).css("background-color", "#dededf");
	});
	
	*/
	
	
	$(".ulLevel1").css("height", "0");
	RespMenuOpen=false;
	$("#imgSandwichContainer").click(function(){
		if(RespMenuOpen==false){
			$(".ulLevel1").css("height", "auto");
		}else{
			$(".ulLevel1").css("height", "0");
		}
		RespMenuOpen= !RespMenuOpen;
		})
	
});





