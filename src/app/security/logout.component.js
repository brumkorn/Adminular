/**
 * Created by Brumkorn on 19.05.2016.
 */
(function () {
  "use strict";
  angular.module('adminular')
    .component('dmLogout', {
      controller: DmLogoutController,
      controllerAs: 'vm'
    });


  /* @ngInject */
  function DmLogoutController($firebaseAuthService, $state) {
    var vm = this;
    $firebaseAuthService.$unauth();
    $state.go('login')
  }


})();
