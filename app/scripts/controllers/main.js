'use strict';

cartApp.controller('MainCtrl', function($scope, goods, cart) {
  $scope.goods = goods.getAll();
  
  $scope.addToCart = function (item) {
    cart.insert(item);
  };
});
