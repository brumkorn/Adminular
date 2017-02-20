/**
 * Created by Brumkorn on 19.05.2016.
 */
(function () {
  "use strict";
  angular.module('adminular')
    .component('dmPosts', {
      templateUrl: "app/posts/posts.html",
      controller: DmPostsController,
      controllerAs: 'vm',
      bindings: {
        postsData: '<',
        categoriesData: '<'
      }
    });


  /* @ngInject */
  function DmPostsController($log,
                             $uibModal,
                             $firebaseObject,
                             $firebaseArray,
                             dialogsService,
                             fbRef) {
    var vm = this;
    vm.editItem = editItem;
    vm.deleteItem = deleteItem;
    vm.posts = vm.postsData;


    activate();
    ////////////////////

    function activate() {
    }

    function editItem(postToEdit) {
      if(postToEdit) {
        var initialCategoryId = postToEdit.category.id;
      }


      var modalProperties = {
        templateUrl: 'app/posts/edit-post.html',
        controller: "EditPostController",
        controllerAs: 'vm',
        resolve: {
          data: function () {
            return {
              posts: vm.postsData,
              categories: vm.categoriesData,
              itemToEdit: postToEdit
            }
          }
        }

      };

      var modalInstance = $uibModal.open(modalProperties);

      modalInstance.result.then(function (result) {
        if (result.$id) {
          if (initialCategoryId !== result.category.id) {
            synchronizeCategories(initialCategoryId, result);
          }
          vm.posts.$save(result);
          return
        }

        vm.posts.$add(result).then(function (post) {
          var id = post.key();
          var record = vm.posts.$getRecord(id);
          fbRef
            .getCategoriesRef()
            .child(record.category.id)
            .child("posts")
            .child(id)
            .set({title: record.title})
        });
      });
    }

    function deleteItem(post) {
      dialogsService.confirm("Are you sure you want to Delete this post?", "Delete?", ["OK", "Cancel"]).then(function () {
        deleteSynchronize(post);
        vm.posts.$remove(post);
      });
    }


    /* Private functions*/
    function deleteSynchronize(post) {
      var query = fbRef.getCommentsRef().child(post.$id);
      $firebaseObject(query).$remove();

      var record = vm.posts.$getRecord(post.$id);
      fbRef
        .getCategoriesRef()
        .child(record.category.id)
        .child("posts")
        .child(post.$id)
        .remove();
    }

    function synchronizeCategories(initialCategoryId, editedPost) {

      fbRef
        .getCategoriesRef()
        .child(initialCategoryId)
        .child("posts")
        .child(editedPost.$id)
        .remove();

      fbRef
        .getCategoriesRef()
        .child(editedPost.category.id)
        .child("posts")
        .child(editedPost.$id)
        .set({title: editedPost.title})

    }


  }

})();
