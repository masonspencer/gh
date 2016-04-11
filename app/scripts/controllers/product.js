'use strict';

/**
 * @ngdoc function
 * @name workspaceApp.controller:FeeditemCtrl
 * @description
 * # FeeditemCtrl
 * Controller of the workspaceApp
 */
angular.module('workspaceApp')
  .controller('ProductCtrl', function ($scope, Ref, $routeParams, $firebaseArray, $timeout) {
    var params = $routeParams.itemID;
    // synchronize a read-only, synchronized array of geerItem, limit to most recent 10
    var geerItems = $firebaseArray(Ref.child('geerItem'));

    geerItems.$loaded().then(function(x) {
        $scope.geerItem = x.$getRecord(params);
    }).catch(function(error) {
        console.log("Error:", error);
    });


  });
