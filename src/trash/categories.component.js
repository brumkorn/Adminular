/**
 * Created by Brumkorn on 17.05.2016.
 */
(function () {
  "use strict";
  angular.module('adminular')
    .directive('categories', categoriesComponent);

  function categoriesComponent() {
    var component = {
      templateUrl: "app/categories/categories.html",
      //bindings: {
      //  initialData: "@"
      //},
      controller: CategoriesController,
      controllerAs: 'vm'
    };

    return component;

    /* @ngInject */
    function CategoriesController($log) {
      var vm = this;
      vm.categories = initialData;

      activate();
      ////////////////////

      function activate() {
        $log.info("Loaded Categories:", vm.categories);
      }
    }
  }

})();
