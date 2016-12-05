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
}];

export default DataServiceFactory;
