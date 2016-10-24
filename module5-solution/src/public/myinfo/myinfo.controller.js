(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['UserService'];
function MyInfoController(UserService) {
  var $ctrl = this;
  $ctrl.notLoggedIn=!UserService.isLoggedIn();
  $ctrl.user=UserService.getPreferences();

}


})();
