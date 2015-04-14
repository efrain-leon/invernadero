'use strict';

describe('Service: success_formater', function(){

  beforeEach(module('Notifier'));

  var service;
  beforeEach(inject(function($injector){
    service = $injector.get('success_formater');
  }));

  describe('Function: format()', function(){
    it('should format diferent actions propertly', function(){
      var success = {
        action:'created',
        element: 'user',
        identifier: 'Bruce Wayne'
      };

      var formated_success = service.format(success);
      expect(formated_success).toBe('Usuario Bruce Wayne creado.');

      success.action = 'updated';

      formated_success = service.format(success);
      expect(formated_success).toBe('Usuario Bruce Wayne actualizado.');

      success.action = 'deleted';

      formated_success = service.format(success);
      expect(formated_success).toBe('Usuario Bruce Wayne borrado.');
    });
  });

  describe('Function format_gritter', function() {
    it('should create the correct GRITTER object for the alert', function() {
      var success = {
        action:'created',
        element: 'user',
        identifier: 'Bruce Wayne'
      };

      var gritted_formated_success = service.format_gritter(success);
      expect(gritted_formated_success.title).toBe('Éxito!');
      expect(gritted_formated_success.text).toBe('Usuario Bruce Wayne creado.');
      expect(gritted_formated_success.class_name).toBe('gritter-success gritter-light');
      expect(gritted_formated_success.image).toBe('images/success.png');
      expect(gritted_formated_success.sticky).toBe(false);
    });
  });
});