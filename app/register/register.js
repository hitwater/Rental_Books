'use strict';
 
angular.module('myApp.register', ['ngRoute'])
 
// Declared route 
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/register', {
        templateUrl: 'register/register.html',
        controller: 'RegisterCtrl',
        require: firebase
    });
}])
 
// Register controller
.controller('RegisterCtrl', ['$scope','$location', function($scope, $location) {

 $scope.signUp = function (){
    if(!$scope.regForm.$invalid){
        var email = $scope.user.email;
            var password = $scope.user.password;
            if (email && password) {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(function() {
                        // do things if success
                        console.log('User creation success');
                        var messageList = firebase.database().ref('users');
                        var message = messageList.push();
                        message.set({
                            'user': email,
                            'password': password
                        });
                        $location.path("/home");
                    }, function(error) {
                        $scope.regError = true;
                        $scope.regErrorMessage = error.message;
                    });
            }
    }
 }


}]);