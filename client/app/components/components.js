import angular from 'angular';
import About from './about/about';
import Login from './login/login';
import Register from './register/register';
import Bookstore from './bookstore/bookstore';
import BookstoreHeader from './bookstoreheader/bookstoreheader';
import DataServiceModule from './DataService/DataService';
import OnlineStoreService from './onlineStore/onlineStore';
import ProductFactory from './Product/Product';
import FirebaseFactory from './Firebase/Firebase';

let componentModule = angular.module('app.components', [
  About,
  Login,
  Register,
  Bookstore,
  BookstoreHeader,
  DataServiceModule,
  OnlineStoreService,
  ProductFactory,
  FirebaseFactory
])

.name;

export default componentModule;
