(function () {
'use strict';

angular.module('LunchChecker', [])

.controller('LunchCheckerController', LunchCheckerController);

LunchCheckerController.$inject = ['$scope'];
function LunchCheckerController($scope){
  $scope.textStyle = "text-success";//text-danger
  $scope.dishes = "";
  $scope.nbDishes = "";
  $scope.countDishes = function () {
    var totalDishes = calculateDishesForString($scope.dishes);
    console.log(totalDishes);
    $scope.nbDishes = sayMessage(totalDishes);
    if(totalDishes==0){
      $scope.textStyle = "text-danger";
    }else{
      $scope.textStyle = "text-success";
    }
  };

  function calculateDishesForString(string){
    if (string.length==0) {
      return 0;
    } else {
      return string.split(",").length;
    }
  }

  function sayMessage(nbDishes){
    if (nbDishes==0) {
      return "Please enter data first";
    }
    if (nbDishes <= 3) {
     return "Enjoy!";
    } else {
      return "Too much!";
    }
  }
}
})();
