'use strict';

angular.module('cruisecontrolApp')
    .controller('friendSideBarCtrl', function ($scope, $http, User) {
	$scope.user = User.get('/users/me');
    });
