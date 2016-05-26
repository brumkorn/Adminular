(function () {
  "use strict";

  angular.module('adminular')
    .controller('CategoriesController', CategoriesController);

  /* @ngInject */
  function CategoriesController($log, $resolve$) {
    var vm = this;
    vm.categories = $resolve$.categoriesData;

    activate();
    ////////////////////

    function activate() {
      $log.info("Loaded Categories:", vm.categories);
    }
  }

})();
