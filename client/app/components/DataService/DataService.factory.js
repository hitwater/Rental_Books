let DataServiceFactory = ["onlineStore",function (onlineStore) {
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

  // create store
    var myStore = onlineStore;

    // create shopping cart
    var myCart = new shoppingCart("AngularStore");

    // return data object with store and cart
    return {
        store: myStore,
        cart: myCart
    };
}];

export default DataServiceFactory;
