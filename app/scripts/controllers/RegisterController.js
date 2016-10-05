'use strict';

var RegisterController = function ($scope, $rootScope, $location, AuthenticationService) {
    
    $scope.passwordHidden = true;
    
    $scope.passwordsDontMatchMsg = 'Passwords don\'t match.';
    $scope.passwordIsNotValidMsg = 'Password length shoul be between 6 and 12 symbols.';
    
     $scope.$watch('password', function(newVal) {
        $scope.passwordIsNotValid = newVal && (newVal.length < 6 || newVal.length > 12) ;
    });
    
    $scope.$watch('confirmPassword', function(newVal) {
        $scope.passwordsAreDifferent = newVal !== $scope.password && newVal;
    });
    
    $scope.togglePasswordVisibility = function() {
        $scope.passwordHidden = !$scope.passwordHidden;
    };
    
    $scope.register = function () {
        if(!$scope.passwordsAreDifferent) {
            AuthenticationService.register($scope.username, $scope.password, function(userAlreadyExist) {
                 if(userAlreadyExist) {
                    $scope.error = 'User with username ' + $scope.username + ' already exist.';
                } else {
                    AuthenticationService.SetCredentials($scope.username, $scope.password);
                    $location.path('/');
                }
            });
        }
    }
}

module.exports = RegisterController;