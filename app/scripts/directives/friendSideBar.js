angular.module('cruisecontrolApp').directive('friendSideBar', function(){


	return function(scope, element, attrs){
		var $friends = $(element).find(".friends");

		$friends.draggable({
			cursor: "move",
			stop: function() {
            	
            }
		});

		// angular.element(".friends").on('mouseover'(function(event) {
		// 	alert("awdwadwadwad");
		// }));
	};
});