//(function() {
//  'use strict';
//
//  angular
//    .module('adminular')
//    .controller('ShellController', ShellController);
//
//  /** @ngInject */
//  function ShellController($log, $rootScope) {
//    var vm = this;
//
//    vm.showSpinner = false;
//    vm.spinnerMessage = 'Retrieving data...';
//
//    vm.spinnerOptions = {
//      radius: 40,
//      lines: 8,
//      length: 0,
//      width: 30,
//      speed: 1.7,
//      corners: 1.0,
//      trail: 100,
//      color: '#428bca'
//    };
//
//
//    activate();
//
//    function activate() {
//
//    }
//
//    var rootScope = $rootScope;
//    rootScope.$on('spinner.toggle', function (event, args) {
//      vm.showSpinner = args.show;
//      if (args.message) {
//        vm.spinnerMessage = args.message;
//      }
//    });
//  }
//})();
