(function() {
  'use strict';

  angular
    .module('Adminular')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);


  }

})();
