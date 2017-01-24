'use strict'

var RouteService = function($http) {
    
        var apiUrl = 'http://localhost:8080';
        
        this.getByName = function(name) {
            return $http.get(apiUrl + '/route/' + name).then(handleSuccess, handleError('Error getting route by name'));
        };
        
        this.getByDirector = function(director) {
            return $http.get(apiUrl + '/routeByDirector/' + director.username).then(handleSuccess, handleError('Error getting route by director'));
        };
        
        function handleSuccess(res) {
            return res.data;
        }
 
        function handleError(error) {
            return function () {
                return { success: false, message: error };
            };
        }
    };

module.exports = RouteService;