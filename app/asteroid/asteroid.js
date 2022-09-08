'use strict';

angular.module('myApp.asteroid', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/asteroid/:asteroidId', {
            templateUrl: 'asteroid/asteroid.html',
            controller: 'AsteroidCtrl'
        });
    }])

    .controller('AsteroidCtrl', ['$routeParams', '$scope', '$http', function ($routeParams, $scope, $http) {

        var self = this;
        var asteroidId = $routeParams.asteroidId;
        // https://api.nasa.gov/neo/rest/v1/neo/3426410?api_key=dBEvnzy2ahbk8oRYPtPoCflKSaaNou4ZLilfugRp       
        $http.get('https://api.nasa.gov/neo/rest/v1/neo/' + asteroidId + '?api_key=dBEvnzy2ahbk8oRYPtPoCflKSaaNou4ZLilfugRp').then(function(response) {
            $scope.asteroidTechnicalSheet = response.data;
            console.log($scope.asteroidTechnicalSheet);
        });
    }]);