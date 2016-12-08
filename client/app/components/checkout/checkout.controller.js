'use strict';
class CheckoutController {
  /* @ngInject */
	constructor($scope, $state, $stateParams) {
    $scope.orderConfirmation = $stateParams.orderConfirmation;
  }
}

export default CheckoutController;
