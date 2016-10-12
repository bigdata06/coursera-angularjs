(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

MenuDataService.$inject = ['ApiBasePath', '$http']
function MenuDataService(ApiBasePath, $http) {
  var service = this;

  service.getAllCategories = function () {
    var response = $http({
    method: "GET",
    url: (ApiBasePath + "/categories.json")
  });

  return response.then(function (result) {
    var categories = [];
    for (var i = 0; i < result.data.length; i++) {
         categories.push(result.data[i]);
     }
   return categories;
  })
  .catch(function (error) {
    console.log("Something went terribly wrong in getAllCategories.");
  });
  }

  service.getItemsForCategory = function (categoryShortName) {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json?category="+categoryShortName)
    });

  return response.then(function (result) {
      var foundItems = [];
      for (var i = 0; i < result.data.menu_items.length; i++) {
           foundItems.push(result.data.menu_items[i]);
       }
     return foundItems;
    })
    .catch(function (error) {
      console.log("Something went terribly wrong in getItemsForCategory.");
    });
  }
}

})();
