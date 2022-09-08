'use strict';

angular.module('myApp.asteroidList').component('asteroidList', {
    templateUrl: 'components/asteroid-list/asteroid-list.template.html',
    controller: ['$http', function AsteroidListController($http) {

        var self = this;

        self.asteroids = {};

        $http.get('https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=dBEvnzy2ahbk8oRYPtPoCflKSaaNou4ZLilfugRp').then(function(response) {
            self.asteroids = response.data;
            console.log(self.asteroids);
        });
    }]
});
