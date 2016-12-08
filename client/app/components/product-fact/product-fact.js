import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ProductFactory from './ProductFactory';

let productFactModule = angular.module('productFact', [
  uiRouter
])

.factory('ProductFactory', ProductFactory)

.name;

export default productFactModule;
