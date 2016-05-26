///**
// * Created by Brumkorn on 16.05.2016.
// */
//(function () {
//  'use strict';
//
//  angular.module('adminular').factory('adminularApi', adminularApi);
//
//
//  /* @ngInject */
//  function adminularApi($log,
//                        $q,
//                        $firebaseObject,
//                        $firebaseArray,
//                        fbRef,
//                        appSpinner) {
//    var service = {
//      getCategories: getCategories,
//      getPosts: getPosts,
//      savePost: savePost
//    };
//
//
//    return service;
//
//    function getCategories() {
//      return fireGet('categories')
//    }
//
//    function getPosts() {
//      return fireGet('posts');
//    }
//
//    function savePost(post) {
//      if (post.$id) {
//
//      }
//      var postsArray = $firebaseArray(fbRef.getPostsRef());
//      postsArray.$add(post);
//    }
//
//    function saveCategory(category) {
//      return fireSave('categories', category)
//    }
//
//
//    /** Private Methods */
//
//    function fireGet(url) {
//
//    }
//
//    function firePush(child, data) {
//
//    }
//
//    function fireUpdate(child, data) {
//
//    }
//
//
//  }
//})();
