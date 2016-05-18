(function() {
  'use strict';

  angular
    .module('adminular')
    .config(routerConfig);

  routerConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/home/home.html',
        controller: 'HomeController',
        controllerAs: 'vm'
      })
      .state('dashboard', {
        url: '/dashboard',
        //abstract: true,
        templateUrl: 'app/layout/dashboard-shell.html',
        controller: 'DashboardShellController',
        controllerAs: 'vm'
      });
      //.state('categories', {
      //  url: '/categories',
      //  templateUrl: 'app/categories/categories.html',
      //  controller: 'CategoriesController',
      //  controllerAs: 'vm'
      //})
      //.state('posts', {
      //  url: '/posts',
      //  templateUrl: 'app/posts/posts.html',
      //  controller: 'PostsController',
      //  controllerAs: 'vm'
      //});

    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
  }

})();
