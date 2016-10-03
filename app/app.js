'use strict';
 
angular.module('myApp', [
    'ngRoute',
    'myApp.home',           // Newly added home module
    'myApp.register',
    'myApp.welcome'
]).
config(['$routeProvider', function($routeProvider) {
    // Set defualt view of our app to home
     
    $routeProvider.otherwise({
        redirectTo: '/home'
    });
}]);