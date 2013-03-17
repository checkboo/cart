'use strict';

cartApp.factory('cart', function() {
  var items = [
    
  ];

  // Public API here
  return {
    getAll: function () {
      return items;
    },
    insert: function (item) {
      for(var i=0; i<items.length; i++) {
        if(item.id === items[i].itemId){
          items[i].count++;
          return;
        }
      }
      items[items.length] = {
        itemId: item.id,
        count: 1
      };
    },
    remove: function (item) {
      for(var i=0; i < items.length; i++) {
        if(items[i].itemId === item.itemId) {
          items.splice(i, 1);
        }
      }
    }
  };
});
