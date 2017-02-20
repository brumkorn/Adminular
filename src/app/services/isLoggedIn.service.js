/**
 * Created by Brumkorn on 21.05.2016.
 */
(function () {
  "use strict";
  angular.module('adminular')
    .factory('isLoggedIn', isLoggedInService);

  /* @ngInject */
  function isLoggedInService($firebaseAuthService) {
    var logged = false;
    var service = {
      get: isLoggedIn
    };

    return service;

    function isLoggedIn() {

      $firebaseAuthService.requireAuth().then(function (data) {
        logged = data;
      });

      return logged;
    }
  }

})();
