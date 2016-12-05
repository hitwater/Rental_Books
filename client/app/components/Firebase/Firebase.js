import angular from 'angular';
import FirebaseFactory from './FirebaseFactory';

let FirebaseModule = angular.module('Firebase', [])

.factory('FirebaseFactory', FirebaseFactory)

.name;

export default FirebaseModule;
