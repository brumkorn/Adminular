/**
 * Created by Brumkorn on 24.05.2016.
 */
(function () {
  "use strict";

  angular
    .module('adminular')
    .directive('dmUnique', dmUniqueDirective);

  /* @ngInject */
  function dmUniqueDirective($log, dataApi) {
    var directive = {
      require: 'ngModel',
      restrict: "A",
      link: link
    };

    return directive;

    function link(scope, element, attrs, ngModel) {
      element.bind('blur', function (e) {
        if (!ngModel || !element.val()) return;

        var keyProperty = scope.$eval(attrs.dmUnique);
        var currentValue = element.val();

        dataApi.checkUniqueValue(keyProperty.list, keyProperty.property, currentValue)
          .then(function (unique) {
            if (currentValue == element.val()) {
              ngModel.$setValidity('unique', unique)
            }
          }, function (error) {
            $log.error("*** ensure unique error", error);
            ngModel.$setValidity('unique', true);
          });
      });

    }
  }


})();
