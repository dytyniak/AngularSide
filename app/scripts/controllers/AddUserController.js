'use strict';

var AddUserController = function($scope, UserService) {
    $scope.login;
    
    $scope.addUser = function() {
        UserService.save({
            login: $scope.login    
        });
        $scope.login = '';
    };
};

module.exports = AddUserController;