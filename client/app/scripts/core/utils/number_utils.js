'use strict';

angular.module('Utils').factory('number_utils', function() {
	
	return {
		percentage_to_number: function(percentage) {
			return parseFloat(percentage) / 100;
		}
	}
});
