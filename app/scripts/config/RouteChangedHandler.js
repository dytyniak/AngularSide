'use strict'

var RouteChangedHandler = function($rootScope, $location, $cookieStore, $http) {

    // keep user logged in after page refresh
    $rootScope.globals = $cookieStore.get('globals') || {};
    if ($rootScope.globals.currentUser) {
        $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
    }

    $rootScope.$on('$locationChangeStart', function (event, next, current) {
        // redirect to login page if not logged in and trying to access a restricted page
        var restrictedPage = $location.path() == '/login' || $location.path() == '/register';
        var loggedIn = $rootScope.globals.currentUser;
        var isHomePage = $location.path() == '/';
        var isMap = $location.path() == '/map';
        if(restrictedPage && loggedIn){
            $location.path('/');
        }else if (!loggedIn && !isHomePage) {
            $location.path('/login');
        }
    });
}
                   
module.exports = RouteChangedHandler;
                
    
    