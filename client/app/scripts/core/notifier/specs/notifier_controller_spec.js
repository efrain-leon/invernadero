'use strict';

describe('Controller: Notifier', function() {

  beforeEach(module('Notifier'));

  var scope;
  var controller;
  var error_formater;
  var success_formater;
  var root_scope;

  beforeEach(inject(function($rootScope, $controller, $injector){
    root_scope = $rootScope;
    scope = $rootScope.$new();
    spyOn(root_scope, '$on');
    controller = $controller('Notifier', {$scope : scope});
    error_formater = $injector.get('error_formater');
    success_formater = $injector.get('success_formater');
  }));

  describe('Handling errors', function(){

    it('should subscibe to error event with $scope.handle_error function', function(){
      expect(root_scope.$on).toHaveBeenCalledWith('error', scope.handle_error);
    });
  });

  describe('Function handle_error', function(){
    it('should use the error formater and then put the result in the scope', function(){
      spyOn(error_formater, 'format').andReturn('formated error');
      
      scope.handle_error({}, 'error');
      
      expect(error_formater.format).toHaveBeenCalledWith('error');
      expect(scope.error_message).toBe('formated error');
    });

    it('should use the error formater and then put the gritter object in the scope', function(){
      var gritter_object = prepare_gritter_object();

      spyOn(error_formater, 'format_gritter').andReturn(gritter_object);
      
      scope.handle_error({}, 'error');
      
      expect(error_formater.format_gritter).toHaveBeenCalledWith('error');
      expect(scope.gritter_alert.text).toBe('gritter_text');
    });
  });

  describe('Handling success', function(){

    it('should subscibe to success event with $scope.handle_success function', function(){
      expect(root_scope.$on).toHaveBeenCalledWith('success', scope.handle_success);
    });
  });

  describe('Function handle_success', function(){
    it('should use the success formater and then put the result in the scope', function(){
      spyOn(success_formater, 'format').andReturn('formated success');
      
      scope.handle_success({}, 'success');
      
      expect(success_formater.format).toHaveBeenCalledWith('success');
      expect(scope.success_message).toBe('formated success');
    });

    it('should use the success formater and then put gritter object in the scope', function(){
      var gritter_object = prepare_gritter_object();

      spyOn(success_formater, 'format').andReturn('');
      spyOn(success_formater, 'format_gritter').andReturn(gritter_object);

      scope.handle_success({}, 'success');
      
      expect(success_formater.format_gritter).toHaveBeenCalledWith('success');
      expect(scope.gritter_alert.text).toBe('gritter_text');
    });
  });

  describe('Function hide_error', function(){
    it('should set scope.error to undefined', function(){
      scope.error = 'something';
      scope.hide_error();
      expect(scope.error).toBe(undefined);
    });
  });

  describe('Function hide_success', function(){
    it('should set scope.success to undefined', function(){
      scope.success = 'something';
      scope.hide_success();
      expect(scope.success).toBe(undefined);
    });
  });

  function prepare_gritter_object() {
    return {
      title: 'gritter_title',
      text: 'gritter_text',
      class_name: 'gritter_class'
    };
  }

});