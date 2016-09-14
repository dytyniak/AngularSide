'use strict';

var LogoutController = function (AuthenticationService, $location) {
    AuthenticationService.ClearCredentials();
    $location.path('/login');
};

module.exports = LogoutController;