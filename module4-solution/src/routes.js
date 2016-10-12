(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

//Your application should have 3 views (i.e., 3 view states): home (home), categories list (categories), items list (items).

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menu/templates/home.template.html'
  })

  // Premade list page
  .state('categoriesList', {
    url: '/categories-list',
    templateUrl: 'src/menu/templates/categories.template.html',
    controller: 'CategoriesListController as categoriesList',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        console.log("categoriesListitems");
        return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('categoriesList.itemDetail', {
    url: '/itemsList/{category}',
    templateUrl: 'src/menu/templates/menu-items.template.html',
    controller: "ItemsDetailController as itemsList",
    resolve: {
      items: ['MenuDataService','$stateParams', function (MenuDataService,$stateParams) {
          console.log("itemsList"+$stateParams.category);
        return MenuDataService.getItemsForCategory($stateParams.category);
      }],
      category: ['$stateParams', function ($stateParams) {
        return $stateParams.category;
      }]

    }
  });

}

})();
