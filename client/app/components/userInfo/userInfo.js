import angular from 'angular';
import uiRouter from 'angular-ui-router';
import userInfoComponent from './userInfo.component';

let userInfoModule = angular.module('userInfo', [
  uiRouter
])

.component('userInfo', userInfoComponent)

.name;

export default userInfoModule;
