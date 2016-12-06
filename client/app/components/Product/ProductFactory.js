'use strict';
import firebase from 'firebase';

/* @ngInject */
let ProductFactory = function($resource) {
    var database = firebase.database();

    return $resource('../../json/:productId.json', {},
		{
			query: {method:'GET', params:{productId:"productList"}, isArray:true}
		});
  };

 export default ProductFactory;