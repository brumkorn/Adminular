(function() {
  "use strict";

  angular
    .module("Adminular")
    .controller("SidebarCtrl", SidebarController);

  /** @ngInject */
  function SidebarController() {
    var vm = this;

    vm.section = 1;

    vm.setSection = function(setSection) {
      vm.section = setSection;
    };

    vm.isSet = function(value) {
      return vm.section === value;
    };
  }
});
