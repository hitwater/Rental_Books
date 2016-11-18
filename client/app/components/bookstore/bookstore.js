import angular from 'angular';
import uiRouter from 'angular-ui-router';
import bookstoreComponent from './bookstore.component';

'use strict';

let bookstoreModule = angular.module('bookstore', [
  uiRouter
])

.component('bookstore', bookstoreComponent)

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('bookstore', {
      url: '/bookstore',
      component: 'bookstore'
    });
})

.name;

export default bookstoreModule;
