import angular from 'angular';
import uiRouter from 'angular-ui-router';
import bookstoreComponent from './bookstore.component';

let bookstoreModule = angular.module('bookstore', [
  uiRouter
])

.component('bookstore', bookstoreComponent)

.name;

export default bookstoreModule;
