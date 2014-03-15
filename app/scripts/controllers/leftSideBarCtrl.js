'use strict';

angular.module('cruisecontrolApp')
.controller('LeftSideBarCtrl', function ($scope, $http) {
	$http.get('/api/awesomeThings').success(function(friends) {
	  	$scope.friends = friends;



	});
});

angular.module('cruisecontrolApp').directive('myAlert', function(){


	return function(scope, element, attrs){
		var $container = $(element);
		var $friends = $container.find(".friends");
		
		$friends.draggable({
			cursor: "move",
			stop: function() {
            	alert("awd");
            }
		});

		// angular.element(".friends").on('mouseover'(function(event) {
		// 	alert("awdwadwadwad");
		// }));
	};
});
