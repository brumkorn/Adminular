(function() {
  'use strict';

  var categories = [
    {
      name:"First category",
      description: "This is description of first category." +
        " Going to the honorable mind doesn’t remember blessing anymore than forgetting creates small history. " +
        " Always balanced forget the brilliant monkey. Sorrow remembers when you fear with moonlight. " +
        "The yogi develops density which is not private. Heu, mirabilis exemplar! Space of art will cosmically feel" +
       " a wonderful guru.",
      posts: 7
    },
    {
      name:"Second category",
      description: "This is description of second category. Blood oranges can be garnished with yellow chickpeas," +
       " also try rubbing the casserole with orange juice. Instead of mashing up thin joghurt with chickpeas," +
        " use two pounds rum and one quarter cup basil saucepan.",
      posts: 3
    },
    {
      name:"Thisr category",
      description: "This is description of third category. C'mon, yer not tasting me without an amnesty! " +
        "All girls endure cloudy, addled bilge rats.Why does the swabbie scream? Gar, cold halitosis! ",
      posts: 1
    }
  ];

  var posts = [
    {
      header: "some header",
      content: "Over there of bliss will oddly hurt a psychic power. Paradox invents when you discover with bliss." +
      "Samadhi doesn’t cheerfully discover any guru — but the creator is what becomes. "
    },
    {
      header: "some header",
      content: "What’s the secret to fluffy and nutty walnut? Always use chopped butter. Try pressing mousse tossed " +
        "with whiskey, garnished with cinnamon. Everyone loves the sweetness of pork shoulder paste enameld with " +
        "bitter green curry. Try squeezeing steak casserole varnished with hollandaise sauce. " +
        "Chopped spinach can be made juicy by jumbling with condensed milk."
    },
    {
      header: "some header",
      content: "The ship leads with courage, fight the cook islands before it whines.Hobble roughly like a mighty skiff." +
       "The breeze grows treasure like an old codfish. Mighty deaths lead to the horror. Jolly roger, never mark a lass."
    }
  ]


  angular
    .module('Adminular')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(/**$timeout , webDevTec, toastr*/ ) {
    var vm = this;

    vm.creationDate = 1461828427821;
    vm.categories = categories;





    //vm.awesomeThings = [];
    //vm.classAnimation = '';
    //vm.showToastr = showToastr;

    //activate();
    //
    //function activate() {
    //  getWebDevTec();
    //  $timeout(function() {
    //    vm.classAnimation = 'rubberBand';
    //  }, 4000);
    //}

    //function showToastr() {
    //  toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
    //  vm.classAnimation = '';
    //}
    //
    //function getWebDevTec() {
    //  vm.awesomeThings = webDevTec.getTec();
    //
    //  angular.forEach(vm.awesomeThings, function(awesomeThing) {
    //    awesomeThing.rank = Math.random();
    //  });
    //}
  }
})();
