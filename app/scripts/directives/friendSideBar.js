angular.module('cruisecontrolApp').directive('friendSideBar', function(){


	return function(scope, element, attrs){
		var friends = $(element).find(".friends");

		friends.draggable({
			cursor: "move",
			stop: function() {
            	angular.element('.feed').html("hi");
            	var copy = $(this);
            	var parent = $('<div class="list-group ng-scope" ng-repeat="friend in friends" friend-side-bar=""><a href="#" class="list-group-item friends ui-draggable">' + copy.html() + '</a></div>');	
            	
			


            	console.log(copy);
            	$(this).remove();
            	console.log(angular.element('.header').append(parent));
            }
		});

		// angular.element(".friends").on('mouseover'(function(event) {
		// 	alert("awdwadwadwad");
		// }));
	};
});