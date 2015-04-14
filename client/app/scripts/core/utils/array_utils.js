'use strict';

angular.module('Utils').factory('array_utils', function (_) {
  return {
    get_filter: function (data, field, proyecto) {
      var filter = [];
      
      _(data).filter(function (obj) {
        
        if (proyecto) {
          if (obj['proyecto_descripcion'] == proyecto) {
            filter.push({
              value: obj[field]
            });
          }
        }
        else {
          filter.push({
            value: obj[field]
          });
        }
      });
      return _.uniq(filter, function (item, key, value) {
        return item.value;
      });
    }
  };
});