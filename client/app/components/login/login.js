import loginComponent from './login.component';

'use strict';


let loginModule = angular.module('login', [
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('login', {
      url: '/',
      component: 'login'
    });
})

.component('login', loginComponent)

.name;

export default loginModule;
