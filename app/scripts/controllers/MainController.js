'use strict';

var MainController = function ($scope, $rootScope, AuthenticationService, $location) {
    
    $scope.loggedIn = $rootScope.globals.currentUser;
    
    $rootScope.$watch('globals.currentUser', function (newVal) {
        $scope.loggedIn = newVal;
        $scope.currentUsername = newVal ? newVal.username : '';
    });
    $scope.logout = function () {
        AuthenticationService.ClearCredentials();
        $location.path('/login');
    };
    
    $scope.isActive = function(tabUrl) {
        return $location.path() === tabUrl; 
    }
};

module.exports = MainController;