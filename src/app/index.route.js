(function () {
  'use strict';

  angular
    .module('adminular')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('shell', {
        abstract: true
        , component: 'dmShell'
        , resolve: {
          isAuth: function ($firebaseAuthService) {
            return $firebaseAuthService.$waitForAuth();
          }
        }
      })
      .state('home', {
        url: '/home'
        , parent: 'shell'
        , component: 'dmHome'
        , resolve: {
          isAuth: function ($firebaseAuthService) {
            return $firebaseAuthService.$waitForAuth();
          },
          currentAuth: function ($log, $firebaseAuthService) {
            return $firebaseAuthService.$requireAuth();
          }
        }
      })
      .state('login', {
        url: '/login'
        , parent: 'shell'
        , component: 'dmLogin'
      })
      .state('logout', {
        url: '/logout',
        component: 'dmLogout'
      })


      .state('dashboard', {
        url: '/dashboard',
        parent: 'shell',
        abstract: true,
        component: 'dmDashboardShell',
        resolve: {
          currentAuth: function ($firebaseAuthService) {
            return $firebaseAuthService.$requireAuth();
          },
          postsData: function ($log, $firebaseArray, fbRef, appSpinner) {
            appSpinner.showSpinner();
            var query = fbRef.getPostsRef();
            return $firebaseArray(query).$loaded().then(function (data) {
              appSpinner.hideSpinner();
              return data;
            });
          },
          categoriesData: function ($log, $firebaseArray, fbRef, appSpinner) {
            appSpinner.showSpinner();
            var query = fbRef.getCategoriesRef().orderByChild("name");
            return $firebaseArray(query).$loaded().then(function (data) {
              appSpinner.hideSpinner();
              return data;
            });
          }
        }
      })
      .state('categories', {
        url: '/categories',
        parent: 'dashboard',
        component: 'dmCategories'
      })
      .state('posts', {
        url: '/posts',
        parent: 'dashboard',
        component: 'dmPosts'
      })
      .state('post-comments', {
        url: '/posts/:id/comments',
        parent: 'dashboard',
        component: 'dmComments',
        resolve: {
          postData: function ($firebaseObject, $stateParams, fbRef) {
            var query = fbRef.getPostsRef().child($stateParams.id);
            return $firebaseObject(query).$loaded();
          },
          commentsData: function ($log, $firebaseArray, $stateParams, fbRef, appSpinner) {
            appSpinner.showSpinner();
            var query = fbRef.getCommentsRef().child($stateParams.id);
            $log.debug("Resolve comments data: ", $firebaseArray(query).$ref() );
            return $firebaseArray(query).$loaded().then(function (data) {
              appSpinner.hideSpinner();
              return data;
            });
          }
        }
      })
      .state('profile', {
        url: '/profile'
        , parent: 'shell'
        , component: 'dmProfile'
        , resolve: {
          currentAuth: function ($log, $firebaseAuthService) {
            return $firebaseAuthService.$requireAuth();
          }
        }
      })
    ;

    //$locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/home');
  }

})();
