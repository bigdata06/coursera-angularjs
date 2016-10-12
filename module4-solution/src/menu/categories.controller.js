(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesListController', CategoriesListController);


CategoriesListController.$inject = ['MenuDataService','items'];
function CategoriesListController(MenuDataService,items) {
  console.log("CategoriesListController");
  var categoriesList = this;

//   var items = [];
//
//
// items.push({
//   name: "Sugar",
//   quantity: "2 bags",
//   description: "Sugar used for baking delicious umm... baked goods."
// });
// items.push({
//   name: "flour",
//   quantity: "1 bags",
//   description: "High quality wheat flour. Mix it with water, sugar, 2 raw eggs."
// });
// items.push({
//   name: "Chocolate Chips",
//   quantity: "3 bags",
//   description: "Put these in the dough. No reason, really. Gotta store them somewhere!"
// });
categoriesList.items = items;
}

})();
