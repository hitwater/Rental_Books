import angular from 'angular';
import uiRouter from 'angular-ui-router';
import contactUsComponent from './ContactUs.component';

let ContactUsModule = angular.module('contactUs', [
  uiRouter
])

.component('contactUs', contactUsComponent)

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('ContactUs', {
      url: '/ContactUs',
      component: 'contactUs'
    });
})
.name;

export default ContactUsModule;
