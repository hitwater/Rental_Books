'use strict';

class ProductController {
	/* @ngInject */
	constructor($scope, $state, $stateParams, DataService) {
		$scope.store = DataService.store;
		$scope.cart = DataService.cart;
		$scope.store.name = "Tom";
		var product = DataService.store.getProduct($stateParams.productId);
		$scope.productId = $stateParams.productId;
		$scope.product = product;
		$scope.updateCart = function(productId){
			return DataService.cart.getTotalCount(productId);
		}
		if($stateParams.productId) {
			$scope.cart.getTotalPriceForBook =  DataService.cart.getTotalCount($stateParams.productId);
		}
		$scope.$watch('store', function(newValue, oldValue, scope) {
			scope.product = newValue.getProduct(scope.productId);
		}, true);
	}
}

export default ProductController;