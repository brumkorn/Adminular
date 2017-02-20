/**
 * Created by Brumkorn on 19.05.2016.
 */
(function () {
  "use strict";
  angular.module('adminular')
    .component('dmCategories', {
      templateUrl: "app/categories/categories.html",
      controller: CategoriesController,
      controllerAs: 'vm',
      bindings: {
        categoriesData: '<',
        postsData: '<'
      }
    });


  /* @ngInject */
  function CategoriesController($log,
                                $uibModal,
                                $firebaseObject,
                                $firebaseArray,
                                dialogsService,
                                fbRef) {
    var vm = this;

    vm.editItem = editItem;
    vm.deleteItem = deleteItem;
    vm.categories = vm.categoriesData;

    vm.$onInit = function () {

    };


    function editItem(category) {
      var modalProperties = {
        templateUrl: 'app/categories/edit-category.html',
        controller: "EditCategoryController",
        controllerAs: 'vm',
        resolve: {
          data: function () {
            return {
              itemToEdit: category,
              categories: vm.categories
            }
          }
        }

      };

      var modalInstance = $uibModal.open(modalProperties);

      modalInstance.result.then(function (result) {
        $log.debug("Saving item: ", result);
        if (result.$id) {
          vm.categories.$save(result);
          return
        }
        vm.categories.$add(result);
      });
    }

    function deleteItem(category) {
      dialogsService
        .confirm("Are you sure you want to Delete this post?",
          "Delete?", ["OK", "Cancel"])
        .then(function () {
          vm.categories.$remove(category);
        });

    }
  }


})();
