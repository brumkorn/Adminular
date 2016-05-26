/**
 * Created by Brumkorn on 21.05.2016.
 */
(function () {
  "use strict";
  angular.module('adminular')
    .component('dmPassLogin', {
      templateUrl: "app/security/pass-login.html",
      controller: DmPassLoginController,
      controllerAs: 'vm'
    });


  /* @ngInject */
  function DmPassLoginController($uibModalInstance) {
    var vm = this;
    vm.login = login;
    vm.cancel = cancel;

    ////////////////////

    function login() {
      $uibModalInstance.close(vm.loginData);
    }

    function cancel() {
      $uibModalInstance.dismiss();
    }
  }


})();
