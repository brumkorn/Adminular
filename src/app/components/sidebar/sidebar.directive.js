(function() {
  "use strict";

  angular
    .module('Adminular')
    .directive('acmeSidebar', acmeSidebar);

  /** @ngInject */
  function acmeSidebar() {
    var directive = {
      restrict: "E",
      templateUrl: 'app/components/sidebar/sidebar.html',
      scope: {},
      //controller: SidebarController,
      //controllerAs: 'vm',
      //bindToController: true,
      link: function(scope) {
        scope.section = 1;
alert('asd')
        scope.setSection = function(setSection) {
          scope.section = setSection;
          };

        scope.isSet = function(value) {
            return scope.section === value;
          };
        }
    };

    return directive;

    /** @ngInject */
//    function SidebarController() {
//      var vm = this;
//alert('asasas')
//      vm.section = 1;
//
//      vm.setSection = function(setSection) {
//        vm.section = setSection;
//      };
//
//      vm.isSet = function(value) {
//        return vm.section === value;
//      };
//    }
  }
});
