'use strict';

angular.module('myApp.asteroidDetails').component('asteroidDetails', {
    templateUrl: 'components/asteroid-details/asteroid-details.template.html',
    controller: ['$http', function AsteroidDetailsController($http) {

        var self = this;

        //
        // $http.get('https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=dBEvnzy2ahbk8oRYPtPoCflKSaaNou4ZLilfugRp').then(function(response) {
        //     self.asteroids = response.data;
        //     console.log(self.asteroids);
        // });
    }]
});
