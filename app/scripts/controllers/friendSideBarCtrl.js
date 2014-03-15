'use strict';

angular.module('cruisecontrolApp')
.controller('friendSideBarCtrl', function ($scope, $http) {
	$http.get('/api/awesomeThings').success(function(friends) {
	  	$scope.friends = friends;
	});
});


