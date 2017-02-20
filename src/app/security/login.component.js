/**
 * Created by Brumkorn on 19.05.2016.
 */
(function () {
  "use strict";
  angular.module('adminular')
    .component('dmLogin', {
      templateUrl: "app/security/login.html",
      controller: DmLoginController,
      controllerAs: 'vm',
      bindings: {
        isAuth: '='
      }
    });


  /* @ngInject */
  function DmLoginController($log, $firebaseAuthService, $state, $uibModal, appSpinner) {
    var vm = this;

    vm.loggedIn = !!vm.isAuth;
    //vm.anonLogin = anonLogin;
    vm.fbLogin = fbLogin;
    vm.passLogin = passLogin;

    activate();

    /////////////////////

    function activate() {
      $log.debug("login page", vm.isAuth);
    }

    //function anonLogin() {
    //  $firebaseAuthService.$authAnonymously().then(function () {
    //    $state.go('home');
    //  }).catch(function (error) {
    //    vm.errorMessage = error.code;
    //  });
    //}

    function passLogin() {
      var modalProperties = {
        templateUrl: 'app/security/pass-login.html',
        controller: "PassLoginController",
        controllerAs: 'vm',
        size: 'sm'
      };

      var modalInstance = $uibModal.open(modalProperties);

      modalInstance.result.then(function(result) {

        passwordAuth(result);
      });

      function passwordAuth(loginData) {
        appSpinner.showSpinner("Logging in");
        $firebaseAuthService.$authWithPassword(loginData).then(function (authData) {
          $state.go('home');
          appSpinner.hideSpinner();
          $log.debug("Login successfull", authData);
        }).catch(function (error) {
          vm.errorMessage = error.code;
          $log.error("Password authentication error",error);
        })
      }

    }


    function fbLogin() {
      $firebaseAuthService.$authWithOAuthPopup("facebook").then(function () {
        $state.go('home');
      }).catch(function (error) {
        vm.errorMessage = error.code;
      });
    }
  }


})();
