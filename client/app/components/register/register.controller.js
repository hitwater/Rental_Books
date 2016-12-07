'use strict';

class RegisterController {
	/* @ngInject */
	constructor($scope, $state, FirebaseFactory) {
		$scope.image = [{
			src: 'http://www.txstate.edu/.resources/gato-template-txstate2015/images/txst-primary.png',
		}];

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
		var creditCard = $scope.data.selectedOption;
		var mailingaddress = $scope.user.mailingaddress;
		var billingAddress = $scope.user.billingaddress;
		var name = $scope.user.name;
		var creditcardnumber = $scope.user.creditcardnumber;
		if (email && password) {
			FirebaseFactory.auth().signOut();
			console.log(email);
			console.log(password);
			FirebaseFactory.auth().createUserWithEmailAndPassword(email, password)
			.then(function() {
				var emailKey = angular.copy(email).replace(".", "");
				var theRef = 'users/' + emailKey;
				var messageList = FirebaseFactory.database().ref(theRef);
				messageList.set({'user': email,
						'creditCardType': creditCard,
						'mailingAddress': mailingaddress,
						'billingAddress':billingAddress,
						'creditcardnumber': creditcardnumber,
						'name': name
				})
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
