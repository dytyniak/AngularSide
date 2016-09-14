'use strict';

var MainRoute = function($routeProvider, $httpProvider) {
    $routeProvider.
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
        redirectTo: '/addUser'
      });
    
    $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
};

module.exports = MainRoute;