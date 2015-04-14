'use strict';

angular.module('cotizacion').factory('handle_notifier_for_cotizacion', function() {
  var service =  {
    error: function(message) {
      $.gritter.add({
        title: 'Alerta!',
        text: message,
        class_name: 'gritter-error gritter-light',
        image: globalApp.base_url + 'web/app/images/warning.png',
        sticky: true
      });
    },
    success: function(message) {
      $.gritter.add({
        title: 'Éxito!',
        text: message,
        class_name: 'gritter-success gritter-light',
        image: globalApp.base_url + 'web/app/images/success.png',
        sticky: false
      });
    }
  };
  
  return service;
});