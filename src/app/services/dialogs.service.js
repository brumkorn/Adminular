/**
 * Created by Brumkorn on 15.05.2016.
 */
(function () {
  "use strict";
  angular.module('adminular')
    .factory('dialogsService', dialogsService);


  function dialogsService($uibModal) {
    var service = {
      confirm: confirm
    };

    return service;

    function confirm(message, title, buttons) {
      var modalInstance = $uibModal.open({
        templateUrl: 'app/shared/confirm-modal.html',
        controller: 'ConfirmModalController',
        controllerAs: 'vm',
        resolve: {
          data: function () {
            return {
              title: title,
              message: message,
              buttons: buttons
            }
          }
        },
        size: 'sm'
      });

      return modalInstance.result;
    }
  }

})();
