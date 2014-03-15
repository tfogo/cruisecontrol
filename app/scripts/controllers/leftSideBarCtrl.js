'use strict';

angular.module('cruisecontrolApp')
  .controller('LeftSideBarCtrl', function ($scope, $http) {
    $http.get('/api/awesomeThings').success(function(friends) {
      $scope.friends = friends;
    });
  });
