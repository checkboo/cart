'use strict';

cartApp.controller('CartCtrl', function($scope, cart, goods) {
  $scope.items = cart.getAll();
  $scope.goods = goods.getAll();
  
  $scope.removeItem = function (item) {
    cart.remove(item);
    $scope.items = cart.getAll();
  }
});
