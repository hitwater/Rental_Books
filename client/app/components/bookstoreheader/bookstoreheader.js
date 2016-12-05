import angular from 'angular';
import uiRouter from 'angular-ui-router';
import bookstoreheaderComponent from './bookstoreheader.component';

let bookstoreheaderModule = angular.module('bookstoreheader', [
  uiRouter
])

.component('bookstoreheader', bookstoreheaderComponent)

.name;

export default bookstoreheaderModule;
