/**
 * Created by Brumkorn on 16.05.2016.
 */
(function () {
  "use strict";

  angular.module('adminular')
    .controller('HomeController', HomeController);

  /* @ngInject */
  function HomeController() {
    var vm = this;
    vm.notesCollapsed = true;

    activate();

    function activate() {

    }
  }

})();
