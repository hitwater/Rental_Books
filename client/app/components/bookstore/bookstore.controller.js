class BookstoreController {
  constructor($scope) {
    storeCtrl.controller('storeController', ['$scope','$routeParams','DataService', function($scope, $routeParams, DataService){
		// get store and cart from service
		$scope.store = DataService.store;
		$scope.cart = DataService.cart;
		$scope.store.name = "Tom";

		// use routing to pick the selected product
		if ($routeParams.productId != null) {
			$scope.product = $scope.store.getProduct($routeParams.productId);
		}
	}
  }
}

export default BookstoreController;
