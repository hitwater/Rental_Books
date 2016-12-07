import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap'
import ngResource from 'angular-resource';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import firebase from 'firebase';
import 'normalize.css';

angular.module('app', [
    uiRouter,
    Common,
    Components,
    ngResource,
    uiBootstrap
  ])

  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    // $locationProvider.html5Mode(true).hashPrefix('!');
    var config = {
      apiKey: "AIzaSyDbWVEW9A4NKF85unGhutdEcOBVJ1gfwls",
      authDomain: "bookstore-a15da.firebaseapp.com",
      databaseURL: "https://bookstore-a15da.firebaseio.com",
      storageBucket: "bookstore-a15da.appspot.com",
      messagingSenderId: "1028660064043"
    };
    firebase.initializeApp(config);
  })

  .value('foo', 'foo')

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
	})
  .factory('foobar', function(){
    return 'foo';
  })



  .component('app', AppComponent);
