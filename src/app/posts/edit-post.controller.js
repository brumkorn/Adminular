/**
 * Created by Brumkorn on 18.05.2016.
 */
(function () {
  "use strict";

  angular.module('adminular')
    .controller('EditPostController', EditPostController);


  /* @ngInject */
  function EditPostController($log, $uibModalInstance, $firebaseObject, fbRef, data) {
    var vm = this;

    vm.posts = data.posts;
    vm.editMode = !!data.itemToEdit;
    vm.categories = data.categories;
    vm.editableItem = data.itemToEdit;
    vm.selectedCategory = vm.categories[0];
    vm.title = (data.itemToEdit ? 'Edit Post' : 'Create new post');
    vm.cancel = cancel;
    vm.save = save;


    activate();


    ////////////////////
    function activate() {
      if (vm.editableItem) {
        vm.editableItem = vm.posts.$getRecord(vm.editableItem.$id);
        vm.selectedCategory = vm.categories.$getRecord(vm.editableItem.category.id);
      }
    }

    function cancel() {
      $uibModalInstance.dismiss();
    }

    function save(form) {
      $log.debug("Edit form is: ", form);
      vm.editableItem.category = { name: vm.selectedCategory.name, id: vm.selectedCategory.$id };

      if (!vm.editMode) {
        vm.editableItem.createdDate = new Date().toJSON();
      }

      if (form.$valid) {

        $uibModalInstance.close(vm.editableItem);
      }
    }
  }

})();
