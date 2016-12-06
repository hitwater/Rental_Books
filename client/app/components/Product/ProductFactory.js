'use strict';
import firebase from 'firebase';

/* @ngInject */
let ProductFactory = function($resource, $http) {
    var database = firebase.database();

    return $resource('https://raw.githubusercontent.com/johnlight/books/2cf8dbcfafab5379c3c598e8b39d5f6d49e8c7bf/:productId.json', {},
		{
			query: {method:'GET', params:{productId:"productList"}, isArray:true}
		});
  };

 export default ProductFactory;