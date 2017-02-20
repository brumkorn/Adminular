/**
 * Created by Brumkorn on 10.05.2016.
 */
(function () {
  "use strict";

  angular
    .module('adminular')
    .factory('gravatarUrlBuilder', gravatarUrlBuilder);

  function gravatarUrlBuilder($log, md5) {
    return {
      buildGravatarUrl: function(email) {
        var defaultGravatarUrl = "http://www.gravatar.com/avatar/000&s=200";

        var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!regex.test(email)) {
          $log.debug("Default gravatar");
          return defaultGravatarUrl;
        }

        email = email.trim().toLowerCase();
        return 'http://www.gravatar.com/avatar/' + md5.createHash(email) + ".jpg?s=200&r=g";

      }
    }
  }


})();
