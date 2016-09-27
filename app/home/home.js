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
.controller('HomeCtrl', ['$scope', function($scope,$firebaseSimpleLogin) {
	console.log("test");
  //var firebase = require("firebase");
  var config = {
    apiKey: "AIzaSyDbWVEW9A4NKF85unGhutdEcOBVJ1gfwls",
    authDomain: "bookstore-a15da.firebaseapp.com",
    databaseURL: "https://bookstore-a15da.firebaseio.com",
    storageBucket: "bookstore-a15da.appspot.com",
    messagingSenderId: "1028660064043"
  };
  firebase.initializeApp(config);
    $scope.user = {};

	$scope.SignIn = function(e) {
    e.preventDefault();  // To prevent form refresh
    var username = $scope.user.email;
    var password = $scope.user.password;
    
    
     
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  	console.log("failed");
	});
}}]);