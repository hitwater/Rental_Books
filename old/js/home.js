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

.service('CommonProp', function() {
    var user = '';
 
    return {
        getUser: function() {
            return user;
        },
        setUser: function(value) {
            user = value;
        }
    };
})
 
// // Home controller
.controller('HomeCtrl',  ['$scope', '$location', 'CommonProp', function($scope, $location,CommonProp) {
  
    $scope.user = {};

	$scope.SignIn = function(e) {
    e.preventDefault();  // To prevent form refresh
    var username = $scope.user.email;
    var password = $scope.user.password;
 
    firebase.auth().signInWithEmailAndPassword(username, password).then(function(user) {
            // Success callback
            console.log('Authentication successful');
            CommonProp.setUser(user);
            $location.path('/welcome');
        }).catch(function(error) {
  	console.log("failed");
	});
}}]);
