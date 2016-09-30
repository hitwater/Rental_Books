'use strict';
 
angular.module('myApp.home', ['ngRoute'])
 
// Declared route 
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'home/home.html',
        controller: 'HomeCtrl',
        require: firebase,
    });
}])
 
// // Home controller
.controller('HomeCtrl', ['$scope', function($scope) {
  
    $scope.user = {};

	$scope.SignIn = function(e) {
    e.preventDefault();  // To prevent form refresh
    var username = $scope.user.email;
    var password = $scope.user.password;
    
    
     
    firebase.auth().signInWithEmailAndPassword(username, password).then(function(user) {
            // Success callback
            console.log('Authentication successful');
        }).catch(function(error) {
  	console.log("failed");
	});
}}]);