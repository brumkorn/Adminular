(function () {
  "use strict";

  angular.module('adminular')
    .controller('PostsController', PostsController);


  /* @ngInject */
  function PostsController($log, adminularApi) {
    var vm = this;
    vm.posts = "initialData";


    activate();
    ////////////////////

    function activate() {
      $log.info("Loaded Posts:", vm.posts);
    }
  }

})();
