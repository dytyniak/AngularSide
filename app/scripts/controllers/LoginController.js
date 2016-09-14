'use strict';

var LoginController = function ($scope, $rootScope, $location, AuthenticationService, FlashService) {

    // reset login status
    AuthenticationService.ClearCredentials();

    $scope.login = function () {
        $scope.dataLoading = true;
        console.log($scope.username, $scope.password);
        AuthenticationService.Login($scope.username, $scope.password, function(response) {
             if(response.success) {
                AuthenticationService.SetCredentials($scope.username, $scope.password);
                $location.path('/');
            } else {
                FlashService.Error(response);
                $scope.dataLoading = false;
            }
        });
    }
}

module.exports = LoginController;