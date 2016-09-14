'use strict'

var AuthenticationService = function(Base64, $http, $cookieStore, $rootScope, $timeout) {
    
    var service = {};
 
    service.Login = function (username, password, callback) {
        $http.post('http://localhost:8080/login', { username: username, password: password })
            .success(function (response) {
                if(response) {
                    response.success = true;    
                }else {
                    response = 'Invalid username or password';
                }
                callback(response);
            });
    };

    service.SetCredentials = function (username, password) {
        var authdata = Base64.encode(username + ':' + password);

        $rootScope.globals = {
            currentUser: {
                username: username,
                authdata: authdata
            }
        };

        $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata; // jshint ignore:line
        $cookieStore.put('globals', $rootScope.globals);
    };

    service.ClearCredentials = function () {
        $rootScope.globals = {};
        $cookieStore.remove('globals');
        $http.defaults.headers.common.Authorization = 'Basic ';
    };

    return service;

};

module.exports = AuthenticationService;