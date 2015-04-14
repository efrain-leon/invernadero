'use strict';

describe('Service: error_formater', function(){

  beforeEach(module('Notifier'));

  var service;
  beforeEach(inject(function($injector){
    service = $injector.get('error_formater');
  }));

  describe('Function: format()', function(){
    it('should format errors properly', function(){
      var error = {
        action:'create',
        element: 'user',
        problems:[
          {message:'permission_denied'}
        ]
      };

      var formated_error = service.format(error);
      expect(formated_error).toBe('Error al crear usuario, permiso denegado.');

    });

    it('should format errors with multiple problems properly', function(){
      var error = {
        action:'edit',
        element: 'user',
        problems:[
          {message:'invalid_name'},
          {message:'duplicate_key'}
        ]
      };

      var formated_error = service.format(error);
      expect(formated_error).toBe('Error al editar usuario, nombre inválido, ya existe.');

    });

    it('should format all the actions correctly', function(){
      var error = {
        action:'create',
        element: 'user',
        problems:[
          {message:'permission_denied'}
        ]
      };

      var formated_error = service.format(error);
      expect(formated_error).toBe('Error al crear usuario, permiso denegado.');

      error.action = 'edit';

      formated_error = service.format(error);
      expect(formated_error).toBe('Error al editar usuario, permiso denegado.');

      error.action = 'delete';

      formated_error = service.format(error);
      expect(formated_error).toBe('Error al borrar usuario, permiso denegado.');

      error.action = 'get';

      formated_error = service.format(error);
      expect(formated_error).toBe('Error al recuperar usuario, permiso denegado.');
    });

  });

  describe('Function format_gritter', function() {
    it('should create the correct GRITTER object for the alert', function() {
      var error = {
        action:'create',
        element: 'user',
        problems:[
          {message:'permission_denied'}
        ]
      };

      error.action = 'edit';

      var gritter_formated_error = service.format_gritter(error);
      expect(gritter_formated_error.title).toBe('Alerta!');
      expect(gritter_formated_error.text).toBe('Error al editar usuario, permiso denegado.');
      expect(gritter_formated_error.class_name).toBe('gritter-error gritter-light');
      expect(gritter_formated_error.image).toBe('images/warning.png');
      expect(gritter_formated_error.sticky).toBe(true);
    });
  });
});