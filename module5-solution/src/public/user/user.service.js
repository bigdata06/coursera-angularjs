(function () {
"use strict";

angular.module('public')
.service('UserService', UserService);

//UserService.$inject = [];
function UserService() {
  var service = this;
  var sUser;
  var loggedIn=false;
  service.savePreferences = function (user) {
    sUser=user;
    return true;
  };

  service.getPreferences = function () {
    return sUser;
  };

  service.login = function () {
    loggedIn=true;
  };

  service.isLoggedIn = function () {
    return loggedIn;
  };
}
})();
