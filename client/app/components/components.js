import angular from 'angular';
import Login from './login/login';
import Register from './register/register';
import Bookstore from './bookstore/bookstore';
import BookstoreHeader from './bookstoreheader/bookstoreheader';
import DataServiceModule from './DataService/DataService';
import OnlineStoreService from './onlineStore/onlineStore';
import Products from './Product/Product';
import FirebaseFactory from './Firebase/Firebase';
import contactUs from './ContactUs/ContactUs';
import editUser from './editUser/editUser';
import help from './help/help';
import cart from './cart/cart';
import productFact from './product-fact/product-fact'

let componentModule = angular.module('app.components', [
  Login,
  Register,
  Bookstore,
  BookstoreHeader,
  DataServiceModule,
  OnlineStoreService,
  Products,
  FirebaseFactory,
  contactUs,
  editUser,
  help,
  cart,
  productFact
])

.name;

export default componentModule;
