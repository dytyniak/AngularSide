'use strict';

var MainRoute = function($routeProvider, $httpProvider, $locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController'
      }).
      when('/addUser', {
        templateUrl: 'views/addUser.html',
        controller: 'AddUserController'
      }).
      when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginController'
      }).
      when('/showUsers', {
        templateUrl: 'views/allUsers.html',
        controller: 'AllUsersController'
      }).
      when('/logout', {
        templateUrl: 'views/login.html',
        controller: 'LogoutController'
      }).
      otherwise({
        redirectTo: '/'
      });
    
    $locationProvider.html5Mode(true);
    
    $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
};

module.exports = MainRoute;