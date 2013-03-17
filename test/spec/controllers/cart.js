'use strict';

describe('Controller: CartCtrl', function() {

  // load the controller's module
  beforeEach(module('cartApp'));

  var CartCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    CartCtrl = $controller('CartCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
