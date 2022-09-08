'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.asteroid',
  'myApp.navBar',
  'myApp.asteroidList',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('');

  $routeProvider.otherwise({redirectTo: '/'});
}]);