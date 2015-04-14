'use strict';

angular.module('underscore', []);
angular.module('underscore').value('_', window._.noConflict());

angular.module('underscore').run(function(_){
  _.mixin({
    capitalize : function(string) {
      return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
    }
  });
});
