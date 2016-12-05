'use strict';
import firebase from 'firebase';

/* @ngInject */
let ProductFactory = function($resource) {
    var database = firebase.database();
    database.ref('books').once('value').then(function(snapshot){
    	console.log(snapshot);
    });
    return $resource('json/:productId.json', {},
    {
      query: {method:'GET', params:{productId:"productList"}, isArray:true}
    });
    return {query:function(){}};
  };

 export default ProductFactory;