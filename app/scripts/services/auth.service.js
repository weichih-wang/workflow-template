'use strict';

angular.module('loginApp.auth', [])

/**
 * @ngdoc object
 * @name loginApp#Auth
 * @object
 * @description
 *
 * An object for handling user authentication.
 *
 */
  .service('Auth', function($rootScope, $q, $state) {
    var prefix = '$loginApp$';
    var access = false;
    var cookie;

    //save cookie to localStorage
    function save(variable, value) {
      var key = prefix + variable;

      if (value === null) {
        localStorage.removeItem(key);
      } else {
        console.log(key);
        localStorage.setItem(key, value);
      }
    }

    //gets cookie from localStorage
    function load(variable) {
      var key = prefix + variable;
      return localStorage.getItem(key);
    }

    //saves user cookie to localStorage
    this.setUser = function(value) {
      access = true;
      cookie = value;
      save('cookie', value);
    };

    //clears user who is logged in
    this.logout = function() {
      save('cookie', null);
      access = false;
      cookie = undefined;
      $state.go('login');
    };

    //TODO: log in
    this.login = function(username, password) {
      //currently used to suppress jshint error
      //TODO: write limitations in service and check string inputted
      console.log(username + '' + password);
      this.setUser('randomToken');
      $state.go('main');
    };

    //TODO: Validate if cookie is valid
    this.validate = function(value) {
      if (value === undefined) {
        return false;
      }
      return true;
    };

    //checks if user has access
    this.hasAccess = function() {
      if (!access) {
        return this.validate(load(prefix + 'cookie'));
      }
      //return true if access is already granted
      return access;
    };
  });
