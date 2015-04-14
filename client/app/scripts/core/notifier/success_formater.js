'use strict';

angular.module('Notifier').factory('success_formater', function(_) {

  var service =  {
    format: function(success) {
      var action = success.action;
      var element = success.element;
      var message = success.message;
      
      return _(element).capitalize() + ' ' + success.message + '.';
    },

    format_gritter: function(success) {
      return {
        title: 'Éxito!',
        text: this.format(success),
        class_name: 'gritter-success gritter-light',
        image: globalApp.base_url + 'web/app/images/success.png',
        sticky: false
      };
    }
  };
  
  return service;
});
