import angular from 'angular';
import uiRouter from 'angular-ui-router';
import firebase from 'firebase';
import loginComponent from './login.component';

'use strict';
 

let loginModule = angular.module('login', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('login', {
      url: '/login',
      component: 'login'
    });
})
.component('login', loginComponent)

.service('CommonProp', function() {
    var user = '';
 
    return {
        getUser: function() {
            return user;
        },
        setUser: function(value) {
            user = value;
        }
    };
});

export default loginModule;
