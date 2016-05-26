/**
 * Created by Brumkorn on 19.05.2016.
 */
(function () {
  "use strict";
  angular.module('adminular')
    .component('dmEditPost', {
      templateUrl: "app/posts/edit-post.html",
      controller: DmEditPostController,
      controllerAs: 'vm'
    });



  /* @ngInject */
  function EditPostController($log, $uibModalInstance, $firebaseObject, fbRef, data) {
    var vm = this;

    vm.cancel = cancel;
    vm.editableItem = data.itemToEdit;
    vm.properties = data;
    vm.save = save;
    vm.title = (data.itemToEdit ? 'Edit Post' : 'Create new post');

    activate();


    ////////////////////
    function activate() {
      if (data.itemToEdit) {
        var query = fbRef.getPostsRef().child(data.itemToEdit.$id);
        vm.editableItem = $firebaseObject(query);
      }
    }

    function cancel() {
      $uibModalInstance.dismiss();
    }

    function save() {
      if (!data.itemToEdit) {
        vm.editableItem.comments = 0;
      }

      $uibModalInstance.close(vm.editableItem);
    }
  }


})();
