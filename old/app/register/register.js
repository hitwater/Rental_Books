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

$scope.data = {
    availableOptions: [
      {id: 'visa', name: 'Visa'},
      {id: 'mastercard', name: 'MasterCard'},
      {id: 'discover', name: 'Discover'},
      {id: 'americanexpress', name: 'American Express'}
    ],
    selectedOption: {id: 'visa', name: 'Visa'} //This sets the default value of the select in the ui
    };


 $scope.signUp = function (){
    if(!$scope.regForm.$invalid){
            var email = $scope.user.email;
            var password = $scope.user.password;
            var creditCard = $scope.data.selectedOption;
            var mailingaddress = $scope.user.mailingaddress;
            var billingAddress = $scope.user.billingaddress;
            var name = $scope.user.name;
            if (email && password) {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(function() {
                        // do things if success
                        console.log('User creation success');
                        console.log($scope.user);
                        console.log($scope);
                        var messageList = firebase.database().ref('users');
                        var message = messageList.push();
                        message.set({
                            'user': email,
                            'password': password,
                            'creditCardType': creditCard,
                            'mailingAddress': mailingaddress,
                            'billingAddress':billingAddress,
                            'name': name
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