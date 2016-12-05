'use strict';

class LoginController {
    /* @ngInject */
    constructor($scope, $state, CommonProp, FirebaseFactory) {


    var loggedIn = window.localStorage.getItem('loggedIn');
    if(loggedIn){
        $state.go('bookstore');
    }

    $scope.user = {};

    $scope.image = [{
    // src: 'http://www.txstate.edu/.resources/gato-template-txstate2015/images/txst-primary.png',
    src: 'img/txst-primary.png',
	}];

	$scope.SignIn = function(e) {
    e.preventDefault();  // To prevent form refresh
    var username = $scope.user.email;
    var password = $scope.user.password;
    FirebaseFactory.auth().signInWithEmailAndPassword(username, password).then(function(user) {
            // Success callback
            console.log('Authentication successful');
            //Store in local storage:
            //window.localStorage.setItem('foo','bar');
            //window.localStorage.getItem('foo');
                //window.localStorage.removeItem('foo');
            CommonProp.setUser(user);
            window.localStorage.setItem('loggedIn', true);
            $state.go('bookstore');
            return;
        }).catch(function(error) {
    console.log("failed");
    console.log(error);
    });
    };
    }
}

export default LoginController;