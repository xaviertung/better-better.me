'use strict';

/**
 * @ngdoc overview
 * @name betterBettermeApp
 * @description
 * # betterBettermeApp
 *
 * Main module of the application.
 */
angular
  .module('betterBettermeApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
	'directives',
	'contact'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
	  .when('/chatroom', {
        templateUrl: 'views/chatroom.html',
        controller: 'ChatRoomCtrl',
        controllerAs: 'chatroom'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
