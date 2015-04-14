'use strict';

angular.module('Utils').factory('format_params_utils', function() {
	
	function format_params(url_params, data_params) {
		
		var params = {};
		
		if (url_params !== undefined) {
			params.url_params = url_params;
		}
		
		if (data_params !== undefined) {
			params.data = data_params;
		}
		
		return params;
	}
	
	return {
		format_params: function(url_params, data_params) {
      return format_params(url_params, data_params);
		}
	};
});