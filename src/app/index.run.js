(function() {
  'use strict';

  angular
    .module('Adminular')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
