'use strict';

angular.module('cruisecontrolApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('/users/friends').success(function(friends) {
	$scope.friends = friends;
	console.log(friends);
    });
  });
