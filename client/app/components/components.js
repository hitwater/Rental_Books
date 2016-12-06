import angular from 'angular';
import Login from './login/login';
import Register from './register/register';
import Bookstore from './bookstore/bookstore';
import BookstoreHeader from './bookstoreheader/bookstoreheader';
import DataServiceModule from './DataService/DataService';
import OnlineStoreService from './onlineStore/onlineStore';
import ProductFactory from './Product/Product';
import FirebaseFactory from './Firebase/Firebase';
import contactUs from './ContactUs/ContactUs';
import editUser from './editUser/editUser';

let componentModule = angular.module('app.components', [
  Login,
  Register,
  Bookstore,
  BookstoreHeader,
  DataServiceModule,
  OnlineStoreService,
  ProductFactory,
  FirebaseFactory,
  contactUs,
  editUser
])

.name;

export default componentModule;
