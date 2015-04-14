'use strict';

angular.module('Notifier').controller('Notifier', function($scope, $rootScope, error_formater, success_formater, warning_formater) {

  $scope.handle_error = function(event, error) {
    $scope.gritter_alert = error_formater.format_gritter(error);
    $.gritter.add($scope.gritter_alert);
  };

  $scope.handle_success = function(event, success) {
    $scope.gritter_alert = success_formater.format_gritter(success);
    $.gritter.add($scope.gritter_alert);
  };
  
  $scope.handle_warning = function(event, warning) {
    $scope.gritter_alert = warning_formater.format_gritter(warning);
    $.gritter.add($scope.gritter_alert);
  };

  $rootScope.$on('error', $scope.handle_error);
  $rootScope.$on('success', $scope.handle_success);
  $rootScope.$on('warning', $scope.handle_warning);
});