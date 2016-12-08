'use strict';

class ProductController {
	/* @ngInject */
	constructor($scope, $state, $stateParams, DataService) {
		$scope.store = DataService.store;
		$scope.cart = DataService.cart;
		$scope.store.name = "Tom";
		var product = DataService.store.getProduct($stateParams.productId);
		$scope.product = product;
		console.log(product);
		$scope.updateCart = function(productId){
			return DataService.cart.getTotalCount(productId);
		}
		if($stateParams.productId) {
			$scope.cart.getTotalPriceForBook =  DataService.cart.getTotalCount($stateParams.productId);
		}
	}
}

export default ProductController;