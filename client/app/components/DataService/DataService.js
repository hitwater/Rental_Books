import angular from 'angular';
import uiRouter from 'angular-ui-router';
import DataServiceFactory from './DataService.factory';

let DataServiceModule = angular.module('DataServiceModule', [
  uiRouter
])

.factory('DataService', DataServiceFactory)

.name;

export default DataServiceModule;
