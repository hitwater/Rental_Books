'use strict';

class BookstoreController {
	/* @ngInject */
	constructor($scope, $state, DataService) {
		var loggedIn = window.localStorage.getItem('loggedIn');
		if(!loggedIn){
			$state.go('login');
		}
		$scope.store = DataService.store;
		$scope.cart = DataService.cart;
		$scope.store.name = "Tom";
	}

}

export default BookstoreController;
