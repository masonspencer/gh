'use strict';

/**
 * @ngdoc function
 * @name workspaceApp.controller:ListItemCtrl
 * @description
 * # ListItemCtrl
 * Controller of the workspaceApp
 */
angular.module('workspaceApp')
  .controller('listItemCtrl', function ($scope, Ref, $firebaseArray, $timeout) {
    $scope.geerItems = $firebaseArray(Ref.child('geerItem'));

    // provide a method for adding a message
    $scope.addItem = function(newItem) {
      if( newItem ) {
        // push a message to the end of the array
        $scope.geerItems.$add({
          name: newItem.name,
          price: newItem.price,
          description: newItem.description,
          tags: newItem.tags
        })
          // display any errors
          .catch(alert);
      }
    };

  });
