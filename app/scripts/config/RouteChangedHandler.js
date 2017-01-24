'use strict'

var RouteChangedHandler = function($rootScope, $location, $cookieStore, $http) {

    // keep user logged in after page refresh
    $rootScope.globals = $cookieStore.get('globals') || {};
    if ($rootScope.globals.currentUser) {
        $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
    }

    $rootScope.$on('$locationChangeStart', function (event, next, current) {
        var isLoginPage = $location.path() == '/login';
        var isRegiserPage = $location.path() == '/register';
        var loggedIn = $rootScope.globals.currentUser;
        var isHomePage = $location.path() == '/';
        var isMap = $location.path() == '/map';
        if(!loggedIn && !isHomePage && !isLoginPage && !isRegiserPage){
            $location.path('/');
        }
    });
};
                   
module.exports = RouteChangedHandler;
                
    
    