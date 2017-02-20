/**
 * Created by Brumkorn on 17.05.2016.
 */
(function () {
  "use strict";
  angular.module('adminular')
    .factory('fbRef', fbRefService);

  function fbRefService($firebaseRef, $firebaseAuthService) {
    var service = {
      getPreferencesRef: getPreferencesRef,
      getCategoriesRef: getCategoriesRef,
      getPostsRef: getPostsRef,
      getCommentsRef: getCommentsRef
    };

    return service;

    function getPreferencesRef() {
      return $firebaseRef.default
        .child('preferences')
        .child($firebaseAuthService.$getAuth().uid);
    }

    function getCategoriesRef() {
      return $firebaseRef.default.child('categories');
    }

    function getPostsRef() {
      return $firebaseRef.default.child('posts');
    }

    function getCommentsRef() {
      return $firebaseRef.default.child('comments');
    }

  }

})();
