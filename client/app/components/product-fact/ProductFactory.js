'use strict';
import firebase from 'firebase';

/* @ngInject */
let ProductFactory = function($resource) {
    return $resource('https://raw.githubusercontent.com/johnlight/books/1121be5afc0f010d55158e351561f638443766ce/:productId.json', {},
		{
			query: {method:'GET', params:{productId:"productList"}, isArray:true}
		});
  };

 export default ProductFactory;