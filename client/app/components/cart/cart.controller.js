'use strict';

class CartController {
	/* @ngInject */
    constructor($scope, DataService, foobar) {
		// get store and cart from service
		console.log("In Cart controller");
		$scope.store = DataService.store;
		$scope.cart = DataService.cart;
		$scope.store.name = "Tom";
		console.log(foobar);

		// use routing to pick the selected product
		// if ($routeParams.productId != null) {
		// 	$scope.product = $scope.store.getProduct($routeParams.productId);
		// }
	}
}

export default CartController;
