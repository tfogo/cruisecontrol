'use strict';

angular.module('cruisecontrolApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
