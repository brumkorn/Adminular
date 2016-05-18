(function () {
  "use strict";

  angular.module('adminular')
    .controller('CategoriesController', CategoriesController);

  /* @ngInject */
  function CategoriesController($log, $firebaseArray, fbRef, initialData, adminularApi) {
    var vm = this;
    vm.categories = initialData;

    activate();
    ////////////////////

    function activate() {
      $log.info("Loaded Categories:", vm.categories);
    }
  }

})();
