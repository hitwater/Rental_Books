import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Login from './login/login';
import Register from './register/register';
import Bookstore from './bookstore/bookstore';

let componentModule = angular.module('app.components', [
  Home,
  About,
  Login,
  Register,
  Bookstore
])

.name;

export default componentModule;
