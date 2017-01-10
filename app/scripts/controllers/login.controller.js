'use strict';

angular.module('loginApp')

  .controller('LoginCtrl', function($scope, Auth) {
    //todo: log in function
    $scope.login = function(username, password) {
      Auth.login(username, password);
    };
  });
