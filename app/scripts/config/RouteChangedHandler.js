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
        console.log($location.path());
        if(loggedIn && restrictedPage || isHomePage) {
            $location.path('/');                                    
        }else if (!restrictedPage && !loggedIn) {
            $location.path('/login');
        }
    });
}
                   
module.exports = RouteChangedHandler;
                
    
    