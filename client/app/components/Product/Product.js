import angular from 'angular';
import ProductFactory from './ProductFactory';

let ProductModule = angular.module('Product', [])

.factory('Product', ProductFactory)

.name;

export default ProductModule;
