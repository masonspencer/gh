'use strict';

describe('Controller: FeeditemCtrl', function () {

  // load the controller's module
  beforeEach(module('workspaceApp'));

  var FeeditemCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FeeditemCtrl = $controller('FeeditemCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
