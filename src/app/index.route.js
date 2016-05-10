(function() {
  'use strict';

  angular
    .module('Adminular')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl',
        controllerAs: 'vm'
      })
      .state('categories', {
        url: '/',
        templateUrl: 'app/categories/categories.html',
        controller: 'CategoriesCtrl',
        controllerAs: 'vm'
      })
      .state('posts', {
        url: '/',
        templateUrl: 'app/posts/posts.html',
        controller: 'PostsCtrl',
        controllerAs: 'vm'
      })


    $urlRouterProvider.otherwise('/');
  }

})();
