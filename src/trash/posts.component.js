/**
 * Created by Brumkorn on 17.05.2016.
 */
(function () {
  "use strict";
  angular.module('adminular')
    .component('posts', postsComponent);

  function postsComponent() {
    var component = {
      templateUrl: "app/posts/posts.html",
      controller: PostsController,
      controllerAs: 'vm'

    };

    return component;

    /* @ngInject */
    function PostsController($log) {
      var vm = this;
      vm.posts = "initialData";


      activate();
      ////////////////////

      function activate() {
        $log.info("Loaded Posts:", vm.posts);
      }
    }
  }

})();
