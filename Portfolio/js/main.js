$( document ).ready(function() {
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
 		    	//replace the pawn to initial position
 		    	$("#pawn").draggable({revert: "valid"});
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
		cursor: "grabbing"
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
 		$("#pawn").draggable({revert: "invalid"});
 		$(".partie_"+$(this).attr("name")).fadeOut(1000);
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
	$(".projet_div").on("click","img",function(){
	
	}); 

	$(".partie_projets").on("mouseover","img",function(){
		$(this).css({
			"opacity":"0.3"
		});
		$(this).next(".text_projets").css({
			"display":"block"
		});
	});
	$(".partie_projets").on("mouseout","img",function(){
		$(this).css({
			"opacity":"1"
		});
		$(this).next(".text_projets").css({
			"display":"none"
		});
	});
});
