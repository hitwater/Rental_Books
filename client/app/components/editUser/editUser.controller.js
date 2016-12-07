'use strict';
class EditUserController {
	/* @ngInject */
	constructor($scope, $state, FirebaseFactory) {
		var loggedIn = window.localStorage.getItem('loggedIn');
		$scope.data = {
			availableOptions: [
			{id: 'visa', name: 'Visa'},
			{id: 'mastercard', name: 'MasterCard'},
			{id: 'discover', name: 'Discover'},
			{id: 'americanexpress', name: 'American Express'}
			]
		}






var ref = "users/" + loggedIn;
		FirebaseFactory.database().ref(ref).on("value", function (snapshot){
			var user = snapshot.val();
			console.log(user);
			console.log(user.user);

		$scope.$applyAsync(function(){
			$scope.data.selectedOption= user.creditCardType ;
			$scope.user = {
			email :user.user,
password: user.password ,
mailingaddress: user.mailingAddress  ,
billingaddress:  user.billingAddress  ,
creditcardnumber: user.creditcardnumber,
name: user.name
		};
		});
		});


		$scope.updateUser = function (){
			var email = $scope.user.email;
		var creditCard = $scope.data.selectedOption;
		var mailingaddress = $scope.user.mailingaddress;
		var billingAddress = $scope.user.billingaddress;
		var name = $scope.user.name;
		var creditcardnumber = $scope.user.creditcardnumber;
		var messageList = FirebaseFactory.database().ref(ref);
				messageList.set({'user': email,
						'creditCardType': creditCard,
						'mailingAddress': mailingaddress,
						'billingAddress':billingAddress,
						'creditcardnumber': creditcardnumber,
						'name': name
				})
		$state.go('bookstore');
		}

	}
}

export default EditUserController;
