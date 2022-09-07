'use strict';

angular.
module('myApp.navBar').
component('navBar', {
    templateUrl: 'components/nav-bar/nav-bar.template.html',
    controller: ['$http', '$routeParams',
        function NavBarController($http, $routeParams) {
            var self = this;
        }
    ]
});
