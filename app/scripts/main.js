var angular = require('angular'); // That's right! We can just require angular as if we were in node
var angularRoute = require('angular-route');
var angularCookies = require('angular-cookies');
var ngMap = require('ngMap');

var MainRoute = require('./config/RouteConfig');
var RouteChangedHandler = require('./config/RouteChangedHandler');

var MainController = require('./controllers/MainController');
var HomeController = require('./controllers/HomeController');
var LoginController = require('./controllers/LoginController');
var RegisterController = require('./controllers/RegisterController');
var MapController = require('./controllers/MapController');

var RouteService = require('./services/RouteService');
var Base64 = require('./services/Base64');
var AuthenticationService = require('./services/AuthenticationService');

var app = angular.module('root', ['ngRoute', 'ngCookies', 'ngMap']);
app.run(['$rootScope', '$location', '$cookieStore', '$http', RouteChangedHandler]);

app.config(['$routeProvider', '$httpProvider', '$locationProvider', MainRoute]);

app.controller('MainController', ['$scope', '$rootScope', 'AuthenticationService', '$location', MainController]);
app.controller('HomeController', [HomeController]);
app.controller('LoginController', ['$scope', '$rootScope', '$location', 'AuthenticationService', LoginController]);
app.controller('RegisterController', ['$scope', '$rootScope', '$location', 'AuthenticationService', RegisterController]);

app.service('RouteService', ['$http', RouteService]);

app.factory('Base64', [Base64]);
app.factory('AuthenticationService', ['Base64', '$http', '$cookieStore', '$rootScope', '$timeout', AuthenticationService]);

app.controller('MapController', ['$scope', 'NgMap', 'RouteService', MapController]);