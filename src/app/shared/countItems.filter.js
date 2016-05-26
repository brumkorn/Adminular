/**
 * Created by Brumkorn on 24.05.2016.
 */
(function () {
  "use strict";

  angular
    .module('adminular')
    .filter('count', count);

  function count() {
    return function(object) {
      var count = 0;
      angular.forEach(object, function () {
        count++;
      });

      return count;
    }
  }


})();
