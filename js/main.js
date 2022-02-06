'use strict';

(function($){
	$(document).ready(function(){
		//Tabs
		$('.tabs').tabs();

		//Stars
		$('.starrr').starrr({
			rating: 4
		});

		//Circle-rating
		$(".circle-rating").circliful({
			foregroundBorderWidth: 5,
			backgroundBorderWidth: 2,
			foregroundColor: "#18e585",
			backgroundColor: "#787c9b",
			fontColor: '#aaadbb',
			percentageTextSize: 30,
			percentageY: 113,
			percent: 65,
			animationStep: 5,
			replacePercentageByText: "7.8"
		});
	});
})(jQuery);