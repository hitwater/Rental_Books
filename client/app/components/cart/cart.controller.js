'use strict';

class CartController {
	/* @ngInject */
    constructor($scope, DataService) {
		$scope.store = DataService.store;
		$scope.cart = DataService.cart;
		$scope.store.name = "Tom";
	}
}

export default CartController;
