/**
 * Created by Brumkorn on 19.05.2016.
 */
(function () {
  "use strict";
  angular.module('adminular')
    .component('dmDashboardShell', {
      templateUrl: "app/layout/dashboard-shell.html",
      controller: DashboardShellController,
      controllerAs: 'vm'
    });


  /* @ngInject */
  function DashboardShellController($log, $state) {
    var vm = this;

    vm.tabs = [
      {text: 'Posts', state: 'posts'},
      {text: 'Categories', state: 'categories'}
    ];

    activate();

    ////////////////////

    function activate() {
      $log.debug($state.current.name)
      _.each(vm.tabs, function (tab) {
        tab.active = ($state.current.name === tab.state);
      });
    }


  }

})();
