(function () {
  'use strict';

  angular
    .module('adminular')
    .config(config);

  /** @ngInject */
  function config($logProvider, $firebaseRefProvider, facebookProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
    //register firebase ref
    $firebaseRefProvider.registerUrl('https://adminular.firebaseio.com/');
    //init facebook api
    /**
     * Here the list of params used to configure the provider
     * @param appId
     * @param status
     * @param xfbml
     * @param cookie
     * @param api-version
     */
    facebookProvider.setInitParams('249785868718451',true,true,true,'v2.6');
    //if your app use extra permissions set it
    facebookProvider.setPermissions(['email','read_stream']);
  }

})();
