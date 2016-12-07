'use strict';

class CartController {
	/* @ngInject */
	constructor($scope, DataService) {
		$scope.store = DataService.store;
		$scope.cart = DataService.cart;
		$scope.store.name = "Tom";
		$scope.signUp = function (cart) {
			var messageList = FirebaseFactory.database().ref('bookstore');
			messageList.set({
				email :{
					'user': email,
					'password': password,
					'creditCardType': creditCard,
					'mailingAddress': mailingaddress,
					'billingAddress':billingAddress,
					'name': name
				}
			})
		}
	}
}

export default CartController;
