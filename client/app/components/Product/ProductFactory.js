let ProductFactory = ['$resource', function($resource) {
    return $resource('json/:productId.json', {},
    {
      query: {method:'GET', params:{productId:"productList"}, isArray:true}
    });
    return {query:function(){}};
  }];

 export default ProductFactory;