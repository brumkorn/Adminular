(function() {
  'use strict';

  angular
    .module('adminular')
    .run(runBlock);

  runBlock.$inject = ['$state', '$log'];

  /** @ngInject */
  function runBlock($state, $log) {

    $log.debug('runBlock end');
  }

})();
