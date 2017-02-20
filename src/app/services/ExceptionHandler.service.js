/**
 * Created by Brumkorn on 11.05.2016.
 */
(function () {
  "use strict";

  angular
    .module('adminular')
    .factory('ExceptionHandler', ExceptionHandler);

  function ExceptionHandler() {

    return function ($log, exception) {
      $log.log("exception handled" + exception.message);
    };
  }


})();
