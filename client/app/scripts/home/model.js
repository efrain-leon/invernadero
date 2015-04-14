'use strict';

angular.module('Home').factory('home_model', function(model) {
  return model('users');
});