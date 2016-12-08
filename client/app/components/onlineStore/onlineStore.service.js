'use strict';

/* @ngInject */
let OnlineStoreServ = ['ProductFactory', function(ProductFactory){

       var product = ProductFactory.query();//This is a promise.
      // product.$promise.then(function(ok){

      // });
      this.products = product;
      this.getProduct = function (pId) {
        for (var i = 0; i < this.products.length; i++) {
           if (this.products[i].id == pId)
              return this.products[i];
        }
        return null;
      };

  }];

export default OnlineStoreServ;
