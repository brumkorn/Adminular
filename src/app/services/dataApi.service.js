/**
 * Created by Brumkorn on 26.05.2016.
 */
(function () {
  "use strict";
  angular.module('adminular')
    .factory('dataApi', dataApiService);

  /* @ngInject */
  function dataApiService($firebaseRef, $firebaseObject) {
    var service = {
      checkUniqueValue: checkUniqueValue
    };

    return service;


    function checkUniqueValue(list, property, value) {
      var query = $firebaseRef.default.child(list)
        .orderByChild(property)
        .equalTo(value);
      return $firebaseObject(query).$loaded(function (data) {
        return data.$value === null
      })
    }

  }

})();
