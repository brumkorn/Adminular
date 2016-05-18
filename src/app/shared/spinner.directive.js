(function () {
    'use strict';

    angular.module('adminular').directive('spinner', spinner);

    function spinner($log, $window) {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
            scope.spinner = null;
            scope.$watch(attrs.spinner, function (options) {


              $log.debug(scope.spinner);
                if (scope.spinner) {
                    scope.spinner.stop();
                }
                scope.spinner = new $window.Spinner(options);
                scope.spinner.spin(element[0]);
            }, true);
        }
    }
})();
