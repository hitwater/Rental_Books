'use strict';

import firebase from 'firebase';

/* @ngInject */
class LoginController {
    constructor($scope, $state, CommonProp) {

    $scope.user = {};

    $scope.image = [{
    src: 'http://www.txstate.edu/.resources/gato-template-txstate2015/images/txst-primary.png',
	}];

	$scope.SignIn = function(e) {
    e.preventDefault();  // To prevent form refresh
    var username = $scope.user.email;
    var password = $scope.user.password;

    firebase.auth().signInWithEmailAndPassword(username, password).then(function(user) {
            // Success callback
            console.log('Authentication successful');
            //Store in local storage:
            //window.localStorage.setItem('foo','bar');
            //window.localStorage.getItem('foo');
				//window.localStorage.removeItem('foo');
            CommonProp.setUser(user);
            $state.go('bookstore');
        }).catch(function(error) {
  	console.log("failed");
	});
    };
    }
}

export default LoginController;