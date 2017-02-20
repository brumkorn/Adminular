/**
 * Created by a.shovgenia on 20.02.2017.
 */
/**
 * Created by Brumkorn on 13.05.2016.
 */
(function () {
  "use strict";

  angular
    .module('adminular')
    .directive('gravatar', gravatar);

  function gravatar(gravatarUrlBuilder) {
    return {
      restrict: 'E',
      template: '<img>',
      replace: true,
      link: function (scope, element, attrs) {
        attrs.$observe('email', function (newValue, oldValue) {
          if (newValue !== oldValue) {
            attrs.$set('src', gravatarUrlBuilder.buildGravatarUrl(newValue));
          }
        });
      }

    }
  }


})();
