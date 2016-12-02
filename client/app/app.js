import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import firebase from 'firebase';
import 'normalize.css';

function shoppingCart(cartName) {
    this.cartName = cartName;
    this.clearCart = false;
    this.checkoutParameters = {};
    this.items = [];

    // load items from local storage when initializing
    // this.loadItems();

    // save items to local storage when unloading
    var self = this;
/*
    $(window).unload(function () {
        if (self.clearCart) {
            self.clearItems();
        }
        self.saveItems();
        self.clearCart = false;
    });
*/
}

angular.module('app', [
    uiRouter,
    Common,
    Components
  ])
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
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

  .factory('foobar', function(){
    return 'foo';
  })
  .service('onlineStore', ['Product', function(Product){

      this.products=Product.query();

      this.getProduct = function (pId) {
        for (var i = 0; i < this.products.length; i++) {
           if (this.products[i].id == pId)
              return this.products[i];
        }
        return null;
      };

  }])

  .factory('Product', function(){
    // return $resource('json/:productId.json', {},
    // {
    //   query: {method:'GET', params:{productId:"productList"}, isArray:true}
    // });
    return {query:function(){}};
  })

  .factory("DataService", ["onlineStore",function (onlineStore) {
    // create store
    var myStore = onlineStore;

    // create shopping cart
    var myCart = new shoppingCart("AngularStore");

    // enable PayPal checkout
    // note: the second parameter identifies the merchant; in order to use the
    // shopping cart with PayPal, you have to create a merchant account with
    // PayPal. You can do that here:
    // https://www.paypal.com/webapps/mpp/merchant
    // myCart.addCheckoutParameters("PayPal", "paypaluser@youremail.com");

    // return data object with store and cart
    return {
        store: myStore,
        cart: myCart
    };
  }])



  .component('app', AppComponent);
