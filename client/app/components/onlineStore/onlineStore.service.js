let OnlineStoreServ = ['Product', function(Product){

      this.products=Product.query();

      this.getProduct = function (pId) {
        for (var i = 0; i < this.products.length; i++) {
           if (this.products[i].id == pId)
              return this.products[i];
        }
        return null;
      };

  }];

export default OnlineStoreServ;
