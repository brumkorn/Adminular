/**
 * Created by Brumkorn on 20.05.2016.
 */
(function () {
  "use strict";
  angular.module('adminular')
    .component('dmProfile', {
      templateUrl: "app/Profile/profile.html",
      controller: DmProfileController,
      controllerAs: 'vm',
      bindings: {
        $transition$: '<'
      }
    });


  /* @ngInject */
  function DmProfileController($log, $state, $firebaseObject, gravatarUrlBuilder, fbRef) {
    var vm = this;

    vm.user = $firebaseObject(fbRef.getPreferencesRef());
    vm.getGravatarUrl = getGravatarUrl;
    vm.save = save;
    vm.cancel = cancel;

    activate();

    function activate() {
      $log.debug("Hello from profile", vm.previousPage);
    }

    function save() {
      vm.user.$save();
    }
    function cancel() {
      var previousPage = vm.$transition$.from().name;
      if (previousPage) {
        $state.go(previousPage);
        return
      }
      $state.go('home');
    }

    function getGravatarUrl(email) {
      return gravatarUrlBuilder.buildGravatarUrl(email);
    }


  }


})();
