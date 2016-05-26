/**
 * Created by Brumkorn on 18.05.2016.
 */
(function () {
  "use strict";

  angular.module('adminular')
    .controller('EditCategoryController', EditCategoryController);


  /* @ngInject */
  function EditCategoryController($log, $uibModalInstance, data) {
    var vm = this;

    vm.categories = data.categories;
    vm.editMode = !!data.itemToEdit;
    vm.editableItem = data.itemToEdit;
    vm.title = (data.itemToEdit ? 'Edit Category' : 'Create new category');
    vm.cancel = cancel;
    vm.save = save;


    activate();


    ////////////////////
    function activate() {
      $log.debug("edit-category modal", vm);
      if (vm.editableItem) {
        vm.editableItem = vm.categories.$getRecord(vm.editableItem.$id);
      }
    }

    function cancel() {
      $uibModalInstance.dismiss();
    }

    function save(form) {

      if (form.$valid) {

        $log.debug("Saving category: ", vm.editableItem);
        $uibModalInstance.close(vm.editableItem);
      }
    }
  }

})();
