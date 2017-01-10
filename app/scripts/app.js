'use strict';

/**
 * @ngdoc overview
 * @name loginApp
 * @description
 * # loginApp
 *
 * Main module of the application.
 */
angular
  .module('loginApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'loginApp.auth'
  ])
  .config(function ($stateProvider, $locationProvider, $urlRouterProvider) {

    $stateProvider
      //default for now.  Will replace with template later
      .state('main', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })

      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/');
  })

  .run(function($rootScope, $timeout, $state, Auth) {

    $rootScope.$on('$stateChangeStart', function(event, toState) {
      // Show login if user is not authenticated
      if (!Auth.hasAccess() && toState.name !== 'login') {
        event.preventDefault();
        $timeout(function() { $state.go('login'); });
        return;
      }
    });

  });

