'use strict';

/**
 * @ngdoc function
 * @name loginApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the loginApp
 */
angular.module('loginApp')
  .controller('MainCtrl', function ($scope, Auth) {
    $scope.logout = function() {
      Auth.logout();
    };
  });
