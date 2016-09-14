'use strict'

var UserService = function UserService($http) {
    
        var apiUrl = 'http://localhost:8080';
        
        this.getAll = function() {
            return $http.get(apiUrl + '/users').then(handleSuccess, handleError('Error getting all users'));
        }
 
        this.getById = function(id) {
            return $http.get(apiUrl + '/users/' + id).then(handleSuccess, handleError('Error getting user by id'));
        }
 
        this.getByUsername = function(username) {
            return $http.get(apiUrl + '/users/' + username).then(handleSuccess, handleError('Error getting user by username'));
        }
 
        this.create = function(user) {
            return $http.post(apiUrl + '/users', user).then(handleSuccess, handleError('Error creating user'));
        }
 
        this.update = function(user) {
            return $http.put(apiUrl + '/users/' + user.id, user).then(handleSuccess, handleError('Error updating user'));
        }
 
        this.delete = function(id) {
            return $http.delete(apiUrl + '/users/' + id).then(handleSuccess, handleError('Error deleting user'));
        }
 
        // private functions
 
        function handleSuccess(res) {
            return res.data;
        }
 
        function handleError(error) {
            return function () {
                return { success: false, message: error };
            };
        }
    }

module.exports = UserService;