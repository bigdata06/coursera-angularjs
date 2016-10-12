(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: 'src/menu/templates/menu-items.template.html',
  bindings: {
    item: '<'
  }
});

})();
