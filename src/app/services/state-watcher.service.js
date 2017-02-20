/**
 * Created by Brumkorn on 16.05.2016.
 */
(function () {
  'use strict';

  angular.module('adminular').factory('stateWatcherService', stateWatcherService);


  function stateWatcherService($transitions, $log, $state) {

    $transitions.onEnter({to: '*'}, function ($transition$, $state$) {
      $log.info(
        'transition enter ', $transition$.toString(),
        "to state:", $transition$.to(),
        "params", $transition$.params(),
        "from state:", $transition$.from(),
        "params", $transition$.params('from'),
        "resolves", $transition$.resolves(),
        "state", $state$
      );
    });

    $transitions.onBefore({to: '*'}, function ($transition$) {
      $log.info(
        'transition before ', $transition$.toString(),
        "to state:", $transition$.to(),
        "params", $transition$.params(),
        "from state:", $transition$.from(),
        "params", $transition$.params('from'),
        "resolves", $transition$.resolves()
      );
    });

    $transitions.onSuccess({to: '*'}, function ($transition$) {
      $log.info(
        'transition success ', $transition$.toString(),
        "to state:", $transition$.to(),
        "params", $transition$.params(),
        "from state:", $transition$.from(),
        "params", $transition$.params('from'),
        "resolves", $transition$.resolves()
      );
    });

    $transitions.onError({to: '*'}, function ($transition$, $error$) {
      $log.error(
        'transition error ', $transition$.toString(),
        "to state:", $transition$.to(),
        "params", $transition$.params(),
        "from state:", $transition$.from(),
        "params", $transition$.params('from'),
        "resolves", $transition$.resolves(),
        "error", $error$
      );

      if($error$ === "AUTH_REQUIRED") {
        $log.warn("You not login, redirect to login page");
        $state.go('login');
      }
    });


    var service = {};
    return service;
  }
})();
