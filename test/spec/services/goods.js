'use strict';

describe('Service: goods', function () {

  // load the service's module
  beforeEach(module('cartApp'));

  // instantiate service
  var goods;
  beforeEach(inject(function(_goods_) {
    goods = _goods_;
  }));

  it('should do something', function () {
    expect(!!goods).toBe(true);
  });

});
