import angular from 'angular';
import OnlineStoreServ from './onlineStore.service';

let OnlineStoreService = angular.module('OnlineStoreService', [])

.service('onlineStore', OnlineStoreServ)

.name;

export default OnlineStoreService;
