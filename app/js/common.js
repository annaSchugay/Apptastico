$( document ).ready(function() {

var owl = $("#owl-demo");
	owl.owlCarousel({
		itemsCustom : [
		  [0, 1],		 
		  [540, 2],
		  [9000, 2],
		  [1100, 3],
		  [1200, 4],
		  [1400, 4],
		  [1600, 4]
		],
		navigation : true
		
	});

});

