$(function() {

	$("#draggable").draggable({
	    revert: true
	});


	$(".topDroppable").topDroppable({
	    drop: function (e, ui) {
	        alert("dropped into " + $(this).attr('id'));
	    }
	}).droppable({
	    tolerance: "pointer"
	});

});