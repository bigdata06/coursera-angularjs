(function () {
'use strict';
//Module declaration
angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

//Controller for the elements to buy
ToBuyShoppingController.$inject = ['ShoppingListCheckOffService','$scope'];
function ToBuyShoppingController(ShoppingListCheckOffService,$scope) {
  var toBuyList = this;
  //init elements
  ShoppingListCheckOffService.addItem('cookies',10);
  ShoppingListCheckOffService.addItem('coke',5);
  ShoppingListCheckOffService.addItem('cake',2);
  ShoppingListCheckOffService.addItem('cheese',1);
  ShoppingListCheckOffService.addItem('ham',5);

  toBuyList.toBuyItems = ShoppingListCheckOffService.getToBuyItems();

  toBuyList.buyItem = function(itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  }

}

//Controller for the elements bought
AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
  var boughtList = this;
 boughtList.boughtItems = ShoppingListCheckOffService.getBoughtItems();
}

//Service to share element between controllers
function ShoppingListCheckOffService() {
  var service = this;
  // List of shopping items
  var toBuyItems = [];
  // List of bought items
  var boughtItems = [];

//add item for init purpose
  service.addItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    toBuyItems.push(item);
  };

  //Transfer method between list
  service.buyItem = function (itemIndex) {
    boughtItems.push(toBuyItems[itemIndex]);
    toBuyItems.splice(itemIndex, 1);
  };

  //getter for tobuy elements list
  service.getToBuyItems = function () {
    return toBuyItems;
  };

  //getter for bought elements list
  service.getBoughtItems = function () {
    return boughtItems;
  };
}

})();
