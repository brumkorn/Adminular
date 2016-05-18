/**
 * Created by Brumkorn on 16.05.2016.
 */
(function () {
  "use strict";

  angular.module('adminular')
    .controller('DashboardShellController', DashboardShellController);

  DashboardShellController.$inject = ['$state', '$stateParams'];

  /* @ngInject */
  function DashboardShellController($state, $stateParams) {
    var vm = this;

    vm.tabs = [
      { text: 'Posts', state: 'dashboard.posts'},
      { text: 'Categories', state: 'dashboard.categories'}
    ];

    activate();

    function activate() {
      _.each(vm.tabs, function (tab) {
        tab.active = ($state.current.name === tab.state);
      });
    }

    ////////////////////
  }

})();
