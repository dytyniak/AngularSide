'use strict';

var AllUsersController = function($scope, UserService) {
    UserService.getAll().then(function(response) {
        $scope.users = response.data;
    });
};

module.exports = AllUsersController;