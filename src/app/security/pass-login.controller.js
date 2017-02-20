/**
 * Created by Brumkorn on 19.05.2016.
 */
(function () {
  "use strict";

  angular.module('adminular')
    .controller('PassLoginController', PassLoginController);


  /* @ngInject */
  function PassLoginController($log, $uibModalInstance) {
    var vm = this;
    vm.login = login;
    vm.cancel = cancel;

    ////////////////////

    function login(form) {
      if(form.$valid) {
        $uibModalInstance.close(vm.loginData);
      }
    }

    function cancel() {
      $uibModalInstance.dismiss();
    }
  }

})();
