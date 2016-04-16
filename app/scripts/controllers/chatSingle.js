'use strict';
/**
 * @ngdoc function
 * @name workspaceApp.controller:ChatCtrl
 * @description
 * # ChatCtrl
 * A demo of using AngularFire to manage a synchronized list.
 */
 /*global angular*/
angular.module('workspaceApp')
  .controller('ChatSingleCtrl', function ($scope, Ref, user, $routeParams, $firebaseObject, $firebaseArray, $timeout) {
    var params = $routeParams;
    // synchronize a read-only, synchronized array of messages, limit to most recent 10
    $scope.conversation = $firebaseArray(Ref.child('conversations/' + params.conversationId + '/messages'));
    
    // display any errors
    $scope.conversation.$loaded().catch(alert);

    // provide a method for adding a message
    $scope.addConversation = function(newMessage) {
      if( newMessage ) {
        // push a message to the end of the array
        $scope.conversation.$add({
          author: user.uid,
          body: newMessage,
          time: Date.now()
        })
          // display any errors
          .catch(alert);
      }
    };
    
  $scope.remove = function(conversation) {
    if (conversation.author === user.uid) {
    $scope.conversation.$remove(conversation);
    }
    else {
      alert('You cant remove that');
    }
  };

    function alert(msg) {
      $scope.err = msg;
      $timeout(function() {
        $scope.err = null;
      }, 5000);
    }
  });
