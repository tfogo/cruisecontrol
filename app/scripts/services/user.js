'use strict';

angular.module('cruisecontrolApp')
    .factory('User', function ($resource) {
	return $resource('/users/:id', {
	    id: '@id'
	}, { //parameters default
	    update: {
		method: 'PUT',
		params: {}
	    },
	    get: {
		method: 'GET',
		params: {
		    id:'me'
		}
	    }
	});
    });
