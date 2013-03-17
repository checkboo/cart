'use strict';

cartApp.factory('goods', function() {
  var goods = [
    {
      id: 0,
      name: "test1",
      description: "description 1",
      image: "no_image_thumb.gif",
      price: 100
    },
    {
      id: 1,
      name: "test2",
      description: "description 2",
      image: "no_image_thumb.gif",
      price: 200
    },
    {
      id: 2,
      name: "test3",
      description: "description 3",
      image: "no_image_thumb.gif",
      price: 300
    },
    {
      id: 3,
      name: "test4",
      description: "description 4",
      image: "no_image_thumb.gif",
      price: 400
    }
  ];

  // Public API here
  return {
    getAll: function() {
      return goods;
    }
  };
});
