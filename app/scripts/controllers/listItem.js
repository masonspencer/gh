'use strict';

/**
 * @ngdoc function
 * @name workspaceApp.controller:ListItemCtrl
 * @description
 * # ListItemCtrl
 * Controller of the workspaceApp
 */
angular.module('workspaceApp')
  .controller('listItemCtrl', function ($scope, $state, Ref, $firebaseArray, $timeout, $cordovaCamera) {
    $scope.geerItems = $firebaseArray(Ref.child('products'));
    var authData = Ref.getAuth();
    // provide a method for adding a message
    $scope.addItem = function(newItem) {
      if( newItem ) {
        // push a message to the end of the array
        $scope.geerItems.$add({
          name: newItem.name,
          owner: authData.uid,
          price: newItem.price,
          description: newItem.description,
          tags: newItem.tags
        })
          // display any errors
          .catch(alert);
      }
    };
    
    
  ionic.Platform.ready(function(){
    // will execute when device is ready, or immediately if the device is already ready.
    console.log('ready');
    console.log(navigator.camera);
  });

  });
