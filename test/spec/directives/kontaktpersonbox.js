'use strict';

describe('Directive: kontaktpersonbox', function () {

  // load the directive's module
  beforeEach(module('appsTfkPolitiskesakerApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<kontaktpersonbox></kontaktpersonbox>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the kontaktpersonbox directive');
  }));
});
