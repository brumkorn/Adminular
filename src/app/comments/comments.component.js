/**
 * Created by Brumkorn on 23.05.2016.
 */
(function () {
  "use strict";
  angular.module('adminular')
    .component('dmComments', {
      templateUrl: "app/comments/comments.html",
      controller: DmCommentsController,
      controllerAs: 'vm',
      bindings: {
        commentsData: '<',
        postData: '<'
      }
    });


  /* @ngInject */
  function DmCommentsController($log, dialogsService, commentGen, fbRef) {
    var vm = this;

    vm.itemToEdit = {};
    vm.currentEdit = {};

    vm.editItem = editItem;
    vm.saveItem = saveItem;
    vm.deleteItem = deleteItem;
    vm.cancelEdit = cancelEdit;
    vm.generateComment = generateComment;

    vm.$onInit = activate;



    ///////////////////
    function activate() {
      $log.debug("CoMMENT Activate", vm)
    }


    function deleteItem(item) {
      dialogsService.confirm("Are you sure you want to Delete this comment?", "Delete?", ["OK", "Cancel"]).then(function () {
        vm.commentsData.$remove(item);
        vm.postData.$ref().child("comments").child(item.$id).remove();
      });
    }

    function editItem(item) {
      vm.currentEdit[item.$id] = true;
      vm.itemToEdit = angular.copy(vm.commentsData.$getRecord(item.$id));
    }

    function saveItem(item) {
      vm.currentEdit[item.$id] = false;
      var record = vm.commentsData.$getRecord(item.$id);
      record.text = vm.itemToEdit.text;
      vm.commentsData.$save(record);

    }

    function cancelEdit(item) {
      vm.currentEdit[item.$id] = false;
    }

    function generateComment() {
      //$log.debug(commentGen.generate());
      vm.commentsData.$add(commentGen.generate()).then(function (ref) {
        var id = ref.key();
        var record = vm.commentsData.$getRecord(id);
        vm.postData.$ref()
          .child("comments")
          .child(id)
          .set( record.author );
      });
    }
  }


})();
