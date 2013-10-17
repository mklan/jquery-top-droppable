/*!
 * jQuery.topDroppable v0.3 (c) 2013 Matthias Klan;
 * Allows you to drop a draggable-element only into the foremost droppable-element, if more of them are overlapping.
 * 
 * contact: matthias.klan@gmail.com
 */


(function($){
	
	var hoveringOverElements = new Array();
	var topElement;
	var i = 0;
	
	$.getCurrentHoveredElements = function(){return getCurrentHoveredElements();}; 
	$.getTopElement = function(){return topElement};


	$.fn.extend({ 
		
		topDroppable: function(settings) {
 			
 			var defaults = {
 
		 	drop: function() {},
		 
		    };
		    var settings = $.extend(defaults, settings);
		
			
			return this.each(function() {
    			$(this).on( "dropover", function( event, ui ) {
    				if($(this).css("z-index") == 'auto'){
    					alert("ERROR: please add a specific z-index to your topDroppable Elements!");
    					return;
    				}
    			    hoveringOverElements.push(i);
    			    $(this).attr('top-droppable-id', i);
    			    i++;
			        topElement = determineTopElement(); 
			    });
			    $(this).on( "dropout", function( event, ui ) {
			    	var position = hoveringOverElements.indexOf(parseInt($(this).attr('top-droppable-id')));
			 		hoveringOverElements.splice(position, 1);
		     		topElement = determineTopElement();	
			    });
				$(this).on( "drop", function( event, ui ) {
			 		hoveringOverElements = new Array();
					if($(this).attr('top-droppable-id') == $(topElement).attr('top-droppable-id')){
						i = 0;
						topElement = null;
						settings.drop.call(this, event, ui );
					}
				});
			});
		}
	});	
	
	function determineTopElement(){
	    var tmp_winner;
	    var tmp_highest = 0;
	
	    for (var i in hoveringOverElements){
	     	  var element = $( "*[top-droppable-id="+hoveringOverElements[i]+"]");
	     	  var z_index = $(element).css("z-index");
	          if( z_index > tmp_highest){
	               tmp_highest = z_index;
	               tmp_winner = element;
	          }
	    }
	    return tmp_winner;
	   
	}	

	function getCurrentHoveredElements(){
		var elements = new Array();

		for (var i in hoveringOverElements){
			var element = $( "*[top-droppable-id="+hoveringOverElements[i]+"]");
			elements.push(element);
	 	}
	 	return elements; 
	}
		
})(jQuery);