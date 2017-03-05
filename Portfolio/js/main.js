$( document ).ready(function() {
	$(".text_tuto").css("opacity","1");
	//Droppable Chunk
	$( ".draggable_area .circle").each(function(){
		$( this ).droppable({
			hoverClass: "circle-hover",
			drop: function( event, ui ) {

		    	$(this).css({
		    		'z-index' : 3,
		    		'height': '500',
		    		'width': '500',
		    		'-webkit-transform': 'scale( 10 )',
		    		'-moz-transform': 'scale( 10 )',
		   			'-o-transform': 'scale( 10 )',
		    		'-ms-transform': 'scale( 10 )',
		   			'transform': 'scale( 10 )'
 		    	});
 		    	$("#pawn").css("display","none");
 		    	$(".text_tuto").css("opacity","0");
 		    	//replace the pawn to initial position
 		    	$("#pawn").draggable({revert: "valid",scroll: false});
 		    	$(".partie_"+$(this).attr("name")).fadeIn(2000);
		   		$(".partie_"+$(this).attr("name")).find(".back").attr("name",$(this).attr("name"));
		    },
		    revert: true
		});
	});

	//Pawn Draggable
	$("#pawn").draggable({
		refreshPositions: true,
		revert: "invalid",
		cursor: "grabbing",
		scroll: false
	});

	//Back Button
	$(".back").on("click",function(){
		$(".circle_"+$(this).attr("name")).css({
			'height': '70',
			'width': '70',
			'-webkit-transform': 'scale( 1 )',
			'-moz-transform': 'scale( 1 )',
			'-o-transform': 'scale( 1 )',
			'-ms-transform': 'scale( 1 )',
			'transform': 'scale( 1 )',
			'z-index' : 1
 		});
 		$("#pawn").draggable({revert: "invalid",scroll: false});
 		$(".partie_"+$(this).attr("name")).fadeOut(500);
 		$("#pawn").fadeIn(2000);
 		$(".circle_"+$(this).attr("name")).css({
 			'-webkit-transform': "",
			'-moz-transform': "",
			'-o-transform': "",
			'-ms-transform': "",
			'transform': ""
 		});
	});

	//images projets

	$(".partie_projets").on("mouseover","a",function(){
		$(this).find("img").css({
			"opacity":"0.3"
		});
		$(this).nextAll(".text_projets").css({
			"display":"block"
		});
	});
	$(".partie_projets").on("mouseout","a",function(){
		$(this).find("img").css({
			"opacity":"1"
		});
		$(this).nextAll(".text_projets").css({
			"display":"none"
		});
	});
	//text projets
	$(".partie_projets").on("mouseover",".text_projets",function(){
		$(this).prev("a").find("img").css({
			"opacity":"0.3"
		});
		$(this).css({
			"display":"block"
		});
	});

	//*******************Skills bar***********************
	$('.skillbar').each(function(){
		$(this).find('.skillbar-bar').animate({
			width:$(this).attr('data-percent')
		},6000);
	});
});
