'use strict';

import firebase from 'firebase';

/* @ngInject */
class RegisterController {
  constructor($scope, $state) {
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
                        $state.go('login');
                    }, function(error) {
                        $scope.regError = true;
                        $scope.regErrorMessage = error.message;
                    });
            }
    }
 }
  }
}

export default RegisterController;
