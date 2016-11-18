'use strict';

/* @ngInject */
class BookstoreController {
  constructor($scope, $DataService) {
		// get store and cart from service
		console.log("In bookstore controller");
		$scope.store = $DataService.store;
		$scope.cart = $DataService.cart;
		$scope.store.name = "Tom";

		// use routing to pick the selected product
		if ($routeParams.productId != null) {
			$scope.product = $scope.store.getProduct($routeParams.productId);
		}
	}
}

export default BookstoreController;
