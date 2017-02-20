(function() {
  'use strict';

  angular
    .module('adminular')
    .component('dmNavbar', {
      templateUrl: 'app/layout/navbar/navbar.html',
      controller: NavbarController,
      controllerAs: 'vm'
    });

  /** @ngInject */
  function NavbarController($log, $scope, $firebaseAuthService, $state) {
    var vm = this;
    vm.navCollapsed = true;

    vm.$onInit = function () {
    };

    $scope.$watch(function () {
      return $firebaseAuthService.$getAuth();
    }, function (value) {
      vm.loggedIn = !!value;
    })
  }

})();
