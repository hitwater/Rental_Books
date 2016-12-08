import angular from 'angular';
import ProductComponent from './Product.Component';

let ProductModule = angular.module('Products', [])

.component('productComponent', ProductComponent)

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('product', {
      url: '/product/:productId',
      component: 'productComponent'
    });
})

.name;

export default ProductModule;
