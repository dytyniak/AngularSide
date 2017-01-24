'use strict';

var LoginController = function ($scope, $rootScope, $location, AuthenticationService) {

    // reset login status
    AuthenticationService.ClearCredentials();

    $scope.login = function () {
        debugger;
        AuthenticationService.Login($scope.username, $scope.password, function(response) {
             if(response) {
                AuthenticationService.SetCredentials($scope.username, $scope.password);
                $location.path('/');
            } else {
                $scope.error = 'Invalid username or password!';
            }
        });
    }
}

module.exports = LoginController;