'use strict';

describe('Controller: Chat2Ctrl', function () {

  // load the controller's module
  beforeEach(module('workspaceApp'));

  var Chat2Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Chat2Ctrl = $controller('Chat2Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
