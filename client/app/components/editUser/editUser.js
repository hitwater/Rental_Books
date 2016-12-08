import angular from 'angular';
import uiRouter from 'angular-ui-router';
import editUserComponent from './editUser.component';

let editUserModule = angular.module('editUser', [
  uiRouter
])

.component('editUser', editUserComponent)

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('editUser', {
      url: '/editUser',
      component: 'editUser'
    });
})

.name;

export default editUserModule;
