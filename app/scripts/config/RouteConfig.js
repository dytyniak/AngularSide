'use strict';

var MainRoute = function($routeProvider, $httpProvider, $locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController'
      }).
      when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginController'
      }).
      when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterController'
      }).
      when('/map', {
        templateUrl: 'views/map.html',
        controller: 'MapController'
      }).
      otherwise({
        redirectTo: '/'
      });
    
    $locationProvider.html5Mode(true);
    
    $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
};

module.exports = MainRoute;