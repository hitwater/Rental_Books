import angular from 'angular';
import uiRouter from 'angular-ui-router';
import helpComponent from './help.component';

let helpModule = angular.module('help', [
  uiRouter
])

.component('help', helpComponent)

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('help', {
      url: '/help',
      component: 'help'
    });
})

.name;

export default helpModule;
