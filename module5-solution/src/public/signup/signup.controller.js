(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController)
.directive('itemExist',SignUpDirective);

SignUpDirective.$inject = ['MenuService'];
function SignUpDirective(MenuService) {
  return {
      require: 'ngModel',
      link: function(scope, element, attrs, ngModel) {
          ngModel.$asyncValidators.menuNumber = function(modelValue, viewValue) {
            var promise = MenuService.getItem(viewValue);
              return promise.then(
                  function(response) {
                      return true;
                  }
              );
              return false;
          };
      }
  };
}

SignUpController.$inject = ['MenuService','UserService'];
function SignUpController(MenuService,UserService) {
  var $ctrl = this;

  $ctrl.signUp = function () {
        $ctrl.error=null;
        $ctrl.user.menuItem=null;
        var promise = MenuService.getItem($ctrl.user.menuNumber);
        promise.then(function(result) {
            $ctrl.user.menuItem=result;
            UserService.savePreferences($ctrl.user);
            UserService.login();
            $ctrl.saved=true;
        }).catch(function(fallback) {
          $ctrl.error=fallback;
      });



   }
}
})();
