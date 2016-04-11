'use strict';

 /*global angular*/
angular.module('workspaceApp')
  .controller('ChatCtrl', function ($scope, Ref, user, $firebaseObject, $firebaseArray, $timeout, lodash) {

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
//   Ref.child("/profile/-KEn8CyuQvZE6UF5MPmg/conversations").on('child_added', function(conversations) {
//   var conversationsKey = conversations.key();
//   console.log(conversations.key());
//   fruits.push(conversationsKey);
//   // $scope.messages = Ref.child("messages/" + conversationsKey).once('value', function(snapshot) {
//   //   // console.log(snapshot.val());
//   //     $scope.test = snapshot.val();

//   // });
//   });
$scope.conversationList = $firebaseArray(Ref.child('/profile/-KEn8CyuQvZE6UF5MPmg/conversations'));
$scope.messages = console.log($scope.conversationList.$id);   
    
    function alert(msg) {
      $scope.err = msg;
      $timeout(function() {
        $scope.err = null;
      }, 5000);
    }
  });
