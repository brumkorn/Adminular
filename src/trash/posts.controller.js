(function () {
  "use strict";

  angular.module('adminular')
    .controller('PostsController', PostsController);


  /* @ngInject */
  function PostsController($log, $uibModal, $resolve$) {
    var vm = this;
    vm.posts = $resolve$.postsData;
    vm.editItem = editItem;
    vm.deleteItem = deleteItem;

    activate();
    ////////////////////

    function activate() {
      $log.info("Loaded Posts:", vm.posts);
    }

    function editItem(post) {
      var modalProperties = {
        templateUrl: 'app/posts/edit-post.html',
        controller: "EditPostController",
        controllerAs: 'vm',
        resolve: {
          data: function () {
            return {
              categories: _.chain(vm.posts).uniq('category').map('category').value(),
              itemToEdit: post
            }
          }
        }

      };

      var modalInstance = $uibModal.open(modalProperties);

      modalInstance.result.then(function(result) {
        if (result.$id) {
          result.$save();
          result.$destroy();
        }
        vm.posts.$add(result);
      });
    }

    function deleteItem(post) {
      vm.posts.$remove(post);
    }

  }

})();
