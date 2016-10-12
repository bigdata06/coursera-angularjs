(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsDetailController', ItemsDetailController);


ItemsDetailController.$inject = ['$stateParams', 'items','category'];
function ItemsDetailController($stateParams, items, category) {
console.log("items :",items);
  var itemDetail = this;
  itemDetail.items=items;
  itemDetail.category=category;
}

})();
