'use strict';

import firebase from 'firebase';

/* @ngInject */
class LoginController {
    constructor($scope) {
  
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
    };
    }
}

export default LoginController;