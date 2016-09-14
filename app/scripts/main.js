var angular = require('angular'); // That's right! We can just require angular as if we were in node
var angularRoute = require('angular-route');
var angularCookies = require('angular-cookies');

var MainRoute = require('./config/RouteConfig');
var RouteChangedHandler = require('./config/RouteChangedHandler');

var AddUserController = require('./controllers/AddUserController');
var AllUsersController = require('./controllers/AllUsersController');
var LoginController = require('./controllers/LoginController');
var LogoutController = require('./controllers/LogoutController');

var UserService = require('./services/UserService');
var FlashService = require('./services/FlashService');
var Base64 = require('./services/Base64');
var AuthenticationService = require('./services/AuthenticationService');


var app = angular.module('root', ['ngRoute', 'ngCookies']);
app.run(['$rootScope', '$location', '$cookieStore', '$http', RouteChangedHandler]);

app.config(['$routeProvider', '$httpProvider', MainRoute]);

app.controller('LoginController', ['$scope', '$rootScope', '$location', 'AuthenticationService', 'FlashService', LoginController]);
app.controller('AddUserController', ['$scope', 'UserService', AddUserController]);
app.controller('AllUsersController', ['$scope', 'UserService', AllUsersController]);
app.controller('LogoutController', ['AuthenticationService', '$location', LogoutController]);

app.service('UserService', ['$http', UserService]);

app.factory('Base64', [Base64]);
app.factory('AuthenticationService', ['Base64', '$http', '$cookieStore', '$rootScope', '$timeout', AuthenticationService]);
app.factory('FlashService', ['$rootScope', FlashService]);