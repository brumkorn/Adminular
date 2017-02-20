/**
 * Created by Brumkorn on 17.05.2016.
 */
(function () {
  "use strict";
  angular.module('adminular')
    .component('dmHome', {
      templateUrl: "app/home/home.html",
      controller: HomeController,
      controllerAs: 'vm',
      bindings: {
        currentAuth: '<'
      }
    });


  /* @ngInject */
  function HomeController() {
    var vm = this;
    vm.notesCollapsed = true;

  }


})();
