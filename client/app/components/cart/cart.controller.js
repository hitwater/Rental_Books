'use strict';

class CartController {
	/* @ngInject */
	constructor($scope, $state, DataService, FirebaseFactory) {
		$scope.store = DataService.store;
		$scope.cart = DataService.cart;
		$scope.store.name = "Tom";
		$scope.checkout = function (cart) {
			var messageList = FirebaseFactory.database().ref('purchased');
			var cleanCart = angular.copy(cart);
			var newPostRef = messageList.push({
				'cart': cleanCart
			});
			cart.clearItems();
			$state.go('checkout',{orderConfirmation: newPostRef.key})
		}
	}
}

export default CartController;
