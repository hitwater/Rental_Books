'use strict';

class ProductController {
    /* @ngInject */
    constructor($scope, $state, $stateParams, DataService) {
        $scope.store = DataService.store;
        $scope.cart = DataService.cart;
        $scope.product = $scope.store.getProduct($stateParams.productId);
        if($stateParams.productId) {
        $scope.cart.getTotalPriceForBook =  $scope.cart.getTotalCount($scope.product);
        }

}
}

export default ProductController;