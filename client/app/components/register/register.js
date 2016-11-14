import angular from 'angular';
import uiRouter from 'angular-ui-router';
import registerComponent from './register.component';

let registerModule = angular.module('register', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('register', {
      url: '/register',
      component: 'register'
    });
})

.component('register', registerComponent)

.name;

export default registerModule;
