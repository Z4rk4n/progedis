'use strict';

angular.module('myApp.asteroidList').component('asteroidList', {
    templateUrl: 'components/asteroid-list/asteroid-list.template.html',
    controller: ['$http', function PhoneListController($http) {

        var self = this;

        self.asteroids = {};

        $http.get('https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY').then(function(response) {
            self.aseroids = response.data;
            console.log(self.aseroids);
        });
    }]
});
