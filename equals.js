(function($){

 	$.fn.extend({ 
 		
		//pass the options variable to the function
 		equals: function( axis , centered ) {
			//Set the default values, use comma to separate the settings, example:
			// var defaults = {
			// 	
			// }
			// var options =  $.extend(defaults, options);
			var axis = ( axis === undefined ? "height" : axis ),				// store which axis to target, defaults to height
				centered = ( centered === undefined ? false : centered ),		// to center the content of the equaled™ 
				stack = $(this),
			
				newHeight = 0,
				newWidth = 0;
			
    	 	stack.each(function() { // find the height or width and store it to respective vars
				
				if ( $(this).outerWidth() > newWidth ) { 
					 newWidth = $(this).outerWidth();
				}

				if ( $(this).outerHeight() > newHeight ) { 
					 newHeight = $(this).outerHeight();
				}
				
    		}); // end the loop.
			
			stack.each(function() {
				if ( axis == "height" ) { $(this).height(newHeight);   				 };		// if we're dealing with the height, apply it.
				if ( axis == "width"  ) { $(this).width(newWidth);  				 };		// if we're dealing with the width, apply it.
				if ( axis == "both"   ) { $(this).height(newHeight).width(newWidth); };		// if we're dealing with both, apply height and width.

				if ( centered === true ) { 													// centering if this is set to 'true'

					var child = $(this).children(); 			// get the child of the equalised item
					child.children().css('display','block');	// make sure the content is a block element (or at least rendered as such)
					child.css({
						'display':'block',
					  	'margin-right': ( $(this).width()  - child.width()  ) / 2 + 'px',
					  	'margin-left': 	( $(this).width()  - child.width()  ) / 2 + 'px',
						'margin-top': 	( $(this).height() - child.height() ) / 2 + 'px',
						'margin-bottom':( $(this).height() - child.height() ) / 2 + 'px'
					});

				};
			});

			return this; // keep jQuery chainable
    	}
	});
	
})(jQuery);