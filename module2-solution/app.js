(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService) {
  var toBuyList = this;
  ShoppingListCheckOffService.addItem('cookies',1);
  ShoppingListCheckOffService.addItem('coke',2);
  ShoppingListCheckOffService.addItem('a',3);
  ShoppingListCheckOffService.addItem('a',4);
  ShoppingListCheckOffService.addItem('s',5);

  toBuyList.toBuyItems = ShoppingListCheckOffService.getToBuyItems();

  toBuyList.buyItem = function(itemIndex) {
    console.log("buyitem"+itemIndex);
    ShoppingListCheckOffService.buyItem(itemIndex);
  }

}


AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
  var boughtList = this;
  boughtList.boughtItems = ShoppingListCheckOffService.getBoughtItems();
}


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var toBuyItems = [];
  var boughtItems = [];

  service.addItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    toBuyItems.push(item);
  };

  service.buyItem = function (itemIndex) {
    console.log("item : "+itemIndex);
    boughtItems.push(toBuyItems[itemIndex]);
    console.log("after push");
    toBuyItems.splice(itemIndex, 1);
    console.log("splice");
    itemIndex--;
  };

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };
}

})();
