/**
 * Created by Brumkorn on 24.05.2016.
 */
(function () {
  "use strict";
  angular.module('adminular')
    .factory('commentGen', commentGenService);

  /* @ngInject */
  function commentGenService() {

    var service = {
      generate: generate
    };

    return service;

    function generate() {
      var usersList = [
        {
          "key" : "-K-sgXFwMdj_CPmLWKpq",
          "name" : "Darth Vader"
        },
        {
          "key" : "-K-sgXFe_iwLRDLrMVf2",
          "name" : "R2-D2"
        },
        {
          "key" : "-K-sgXFWAuXU4iN4Uwv-",
          "name" : "Luke Skywalker"
        },
        {
          "key" : "-K-sgXF6kcVNbkMTnm8g",
          "name" : "C-3PO"
        }
      ];

      var textList = [
        "Zirbus resisteres, tanquam secundus bulla.",
        "Pol.Ubi est bi-color canis?",
        "Manifestation is not atomic in space, the afterworld, or paradise, but everywhere.",
        "Soaked, tangy pudding is best varnished with sichuan-style adobo sauce.",
        "Arg, never love a wind.Never fire a seashell.",
        "I dissolve this history, it's called senior resistance.",
        "The underworld is full of advice.",
        "Imminent intuitions feels most heavens.The life is an occult karma.",
        "Fight me freebooter, ye dead kraken! Everyone loves the viscosity of popcorn tart enameld with sweet szechuan pepper.",
        "Est barbatus detrius, cesaris.Historias peregrinatione, tanquam superbus abnoba.",
        "Secret chaos realizes most musics.Agripetas observare in infernum!",
        "Walk never like a galactic parasite.Warp impressively like a distant klingon."
      ];

      var startDate = new Date("1970/1/1");
      var endDate = new Date("2016/1/1");

      return {
        "author" : randomAuthor(usersList),
        "created" : randomDate(startDate , endDate , 0, 23),
        "text" : randomText(textList)
      };

      function randomDate(start, end, startHour, endHour) {
        var date = new Date(+start + Math.random() * (end - start));
        var hour = startHour + Math.random() * (endHour - startHour) | 0;
        date.setHours(hour);
        return date.toJSON();
      }

      function randomAuthor(users) {
        var randomIndex = Math.floor( (Math.random() * users.length) );
        return users[randomIndex];
      }

      function randomText(text) {
        var randomIndex =  Math.floor( (Math.random() * text.length) );
        return text[randomIndex];
      }
    }


  }

})();
