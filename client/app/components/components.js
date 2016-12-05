import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Login from './login/login';
import Register from './register/register';
import Bookstore from './bookstore/bookstore';
import BookstoreHeader from './bookstoreheader/bookstoreheader';
import DataServiceModule from './DataService/DataService';
import OnlineStoreService from './onlineStore/onlineStore';
import ProductFactory from './Product/Product';

let componentModule = angular.module('app.components', [
  Home,
  About,
  Login,
  Register,
  Bookstore,
  BookstoreHeader,
  DataServiceModule,
  OnlineStoreService,
  ProductFactory
])

.name;

export default componentModule;
