'use strict';
angular.module('workspaceApp')

  .run(["$rootScope", "$state", function($rootScope, $state) {
    $rootScope.$on("$stateChangeError", function(event, toState, toParams, fromState, fromParams, error) {
      // We can catch the error thrown when the $requireAuth promise is rejected
      // and redirect the user back to the home page
      if (error === "AUTH_REQUIRED") {
        $state.go("login");
      }
    });
    }])
  .run(["$rootScope", "$state", function($rootScope, $state) {
    $rootScope.previousState;
    $rootScope.currentState;
    $rootScope.$on('$stateChangeSuccess', function(ev, to, toParams, from, fromParams) {
      $rootScope.previousState = from.name;
      $rootScope.currentState = to.name;
      console.log('Previous state:'+$rootScope.previousState);
      console.log('Current state:'+$rootScope.currentState);
    });
  }])
  
.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('feed', {
      url: '/feed',
      templateUrl: 'views/main.html',
      controller: 'MainCtrl',
      resolve: {
        // controller will not be loaded until $waitForAuth resolves
        // Auth refers to our $firebaseAuth wrapper in the example above
        "currentAuth": ["Auth", function(Auth) {
          // $waitForAuth returns a promise so the resolve waits for it to complete
          return Auth.$waitForAuth();
        }]
      }
    })
    .state('product', {
      url: '/product/:itemID',
        templateUrl: 'views/product.html',
        controller: 'ProductCtrl',
        resolve: {
          // controller will not be loaded until $waitForAuth resolves
          // Auth refers to our $firebaseAuth wrapper in the example above
          "currentAuth": ["Auth", function(Auth) {
            // $waitForAuth returns a promise so the resolve waits for it to complete
            return Auth.$waitForAuth();
          }]
        }
    })
    .state('listItem', {
      url: '/listItem',
        templateUrl: 'views/listItem.html',
        controller: 'listItemCtrl',
        resolve: {
          // controller will not be loaded until $requireAuth resolves
          // Auth refers to our $firebaseAuth wrapper in the example above
          "currentAuth": ["Auth", function(Auth) {
            // $requireAuth returns a promise so the resolve waits for it to complete
            // If the promise is rejected, it will throw a $stateChangeError (see above)
            return Auth.$requireAuth();
          }]
        }
    })
    .state('login', {
      url: '/login/',
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        resolve: {
          // controller will not be loaded until $waitForAuth resolves
          // Auth refers to our $firebaseAuth wrapper in the example above
          "currentAuth": ["Auth", function(Auth) {
            // $waitForAuth returns a promise so the resolve waits for it to complete
            return Auth.$waitForAuth();
          }]
        }
    })
    .state('account', {
      url: '/account',
        templateUrl: 'views/account.html',
        controller: 'AccountCtrl',
        resolve: {
          // controller will not be loaded until $requireAuth resolves
          // Auth refers to our $firebaseAuth wrapper in the example above
          "currentAuth": ["Auth", function(Auth) {
            // $requireAuth returns a promise so the resolve waits for it to complete
            // If the promise is rejected, it will throw a $stateChangeError (see above)
            return Auth.$requireAuth();
          }]
        }
    })
    .state('chat', {
      url: '/chat',
        templateUrl: 'views/chat.html',
        controller: 'ChatCtrl',
        resolve: {
          // controller will not be loaded until $requireAuth resolves
          // Auth refers to our $firebaseAuth wrapper in the example above
          "currentAuth": ["Auth", function(Auth) {
            // $requireAuth returns a promise so the resolve waits for it to complete
            // If the promise is rejected, it will throw a $stateChangeError (see above)
            return Auth.$requireAuth();
          }]
        }
    })
    .state('chatSingle', {
      url: '/chat/:conversationId',
        templateUrl: 'views/chatSingle.html',
        controller: 'ChatSingleCtrl',
        resolve: {
          // controller will not be loaded until $requireAuth resolves
          // Auth refers to our $firebaseAuth wrapper in the example above
          "currentAuth": ["Auth", function(Auth) {
            // $requireAuth returns a promise so the resolve waits for it to complete
            // If the promise is rejected, it will throw a $stateChangeError (see above)
            return Auth.$requireAuth();
          }]
        }
    });



  $urlRouterProvider.otherwise('/feed');

});