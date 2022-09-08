'use strict';

angular.module('myApp.asteroid', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/asteroid/:asteroidId', {
            templateUrl: 'asteroid/asteroid.html',
            controller: 'AsteroidCtrl'
        });
    }])

    .controller('AsteroidCtrl', ['$routeParams', function ($routeParams) {

        var self = this;

        self.x = 1;

    }]);