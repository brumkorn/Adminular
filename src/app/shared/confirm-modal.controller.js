/**
 * Created by Brumkorn on 15.05.2016.
 */
(function () {
  "use strict";

  angular.module('adminular')
    .controller('ConfirmModalController', ConfirmModalController);


  /* @ngInject */
  function ConfirmModalController($uibModalInstance, data) {
    var vm = this;

    vm.cancel = cancel;
    vm.ok = ok;
    vm.properties = data;

    function cancel() {
      $uibModalInstance.dismiss();
    }

    function ok() {
      $uibModalInstance.close();
    }
  }

})();
