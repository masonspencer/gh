'use strict';

/**
 * @ngdoc function
 * @name workspaceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the workspaceApp
 */
angular.module('workspaceApp')
  .controller('MainCtrl', function ($scope, Ref, $firebaseArray, $timeout) {
    // synchronize a read-only, synchronized array of geerItem, limit to most recent 10
     $scope.products = $firebaseArray(Ref.child('products'));
    // var testt = $firebaseArray(Ref);
    // display any errors

    // // provide a method for adding a message
    // $scope.addMessage = function(newMessage) {
    //   if( newMessage ) {
    //     // push a message to the end of the array
    //     $scope.messages.$add({text: newMessage})
    //       // display any errors
    //       .catch(alert);
    //   }
    // };
    function alert(msg) {
      $scope.err = msg;
      $timeout(function() {
        $scope.err = null;
      }, 5000);
    }
  });
