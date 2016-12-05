'use strict';


class BookstoreController {
	/* @ngInject */
  constructor($scope, DataService, foobar, CommonProp) {
		// get store and cart from service
		console.log("In bookstore controller");
		$scope.store = DataService.store;
		$scope.cart = DataService.cart;
		$scope.store.name = "Tom";
		console.log(foobar);
		// use routing to pick the selected product
		// if ($routeParams.productId != null) {
		// 	$scope.product = $scope.store.getProduct($routeParams.productId);
		// }
	$scope.user = CommonProp.getUser();

	}

}

export default BookstoreController;
