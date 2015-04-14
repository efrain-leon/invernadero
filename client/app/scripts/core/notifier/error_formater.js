'use strict';

angular.module('Notifier').factory('error_formater', function(_) {

  var service =  {
    format: function(error) {
      var message = 'error al';
      var action = error.action;
      var element = error.element;
      var problems = error.problems;
      
      if (action == 'create') {
        action = 'crear';
      }
      
      if (action == 'update') {
        action = 'actualizar';
      }
      
      return _(message).capitalize() + ' ' + action + ' ' + element + ' ' + problems + '.';
    },

    format_gritter: function(error) {
      return {
        title: 'Alerta!',
        text: this.format(error),
        class_name: 'gritter-error gritter-light',
        image: globalApp.base_url + 'web/app/images/warning.png',
        sticky: true
      };
    }
  };
  
  return service;
});