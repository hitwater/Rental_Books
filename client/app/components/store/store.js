import angular from 'angular';
import uiRouter from 'angular-ui-router';
import storeComponent from './store.component';

let storeModule = angular.module('store', [
  uiRouter
])

.component('store', storeComponent)

.name;

export default storeModule;
