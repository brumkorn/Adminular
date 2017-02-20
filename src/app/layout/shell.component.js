/**
 * Created by Brumkorn on 19.05.2016.
 */
(function () {
  "use strict";
  angular.module('adminular')
    .component('dmShell', {
      templateUrl: "app/layout/shell.html",
      controller: ShellController,
      controllerAs: 'vm',
      bindings: {
        isAuth: "="
      }
    });


  /** @ngInject */
  function ShellController($log, $rootScope) {
    var vm = this;

    vm.showSpinner = false;
    vm.spinnerMessage = 'Retrieving data...';

    vm.spinnerOptions = {
      radius: 40,
      lines: 8,
      length: 0,
      width: 30,
      speed: 1.7,
      corners: 1.0,
      trail: 100,
      color: '#428bca'
    };


    var rootScope = $rootScope;
    rootScope.$on('spinner.toggle', function (event, args) {
      vm.showSpinner = args.show;
      if (args.message) {
        vm.spinnerMessage = args.message;
      }
    });
  }

})();
