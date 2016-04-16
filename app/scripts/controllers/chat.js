'use strict';

 /*global angular*/
angular.module('workspaceApp')
  .controller('ChatCtrl', function ($scope, Ref, user, $firebaseObject, $firebaseArray, $timeout, Firebase) {
  
  var authData = Ref.getAuth();
  var i = '';


var baseRef = new Firebase("https://blistering-torch-3665.firebaseio.com");
var norm = new Firebase.util.NormalizedCollection(
  [baseRef.child('/profile/' + authData.uid + '/conversations'), "usersConversations"],
  baseRef.child("/conversations")
);

norm = norm.select(
  "usersConversations.$key",
  {"key":"conversations.$value","alias":"conversation"}
);

var ref = norm.ref();

ref.on('value', function(snap) {
  $scope.conversations = snap.val();
});

$scope.userName = [];
$scope.userGravatar = [];
$scope.getUser = function(members, index) {
  
  for (i = 0; i < members.length; i++) { 
    if (members[i] === authData.uid) {

    }
    else {
      var userRef = new Firebase('https://blistering-torch-3665.firebaseio.com/profile/' + members[i]);
      userRef.on('value', function(snap) {
        $scope.userName[index] = snap.val().userName;
        $scope.userGravatar[index] = snap.val().gravatar;
      });
    }
  }
  
};

$scope.getLastMessage = function(messages) {
  // for (var message in messages) {
          var lastMessageId = Object.keys(messages)[Object.keys(messages).length - 1];
          return messages[lastMessageId].body;    // or do something with it and break
  // }
};

    // function alert(msg) {
    //   $scope.err = msg;
    //   $timeout(function() {
    //     $scope.err = null;
    //   }, 5000);
    // }
  });
