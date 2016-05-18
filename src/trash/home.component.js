/**
 * Created by Brumkorn on 17.05.2016.
 */
(function () {
  "use strict";
  angular.module('adminular')
    .component('home', homeComponent);

  function homeComponent() {
    var component = {
      templateUrl: "app/home/home.html",
      controller: HomeController,
      controllerAs: 'vm'

    };

    return component;

    /* @ngInject */
    function HomeController() {
      var vm = this;
      vm.notesCollapsed = true;

      alert("HELLO HOME CONTROLLER");
    }
  }

})();
