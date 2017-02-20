(function() {
  'use strict';

  angular
    .module('adminular')
    .run(runBlock);



  /** @ngInject */
  function runBlock($log, $state, stateWatcherService) {
    $log.debug('runBlock end');
  }

})();
