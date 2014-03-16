'use strict';

angular.module('cruisecontrolApp')
    .controller('friendSideBarCtrl', function ($scope, $http, User) {
	$scope.user = User.get('/users/me', function(user) {

	});

	console.log('HIIIIIIII');

	$http.get('/users/friends').success(function(friends) {
	    $scope.friends = friends;
	    console.log(friends);
	});
    });

