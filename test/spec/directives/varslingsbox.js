'use strict';

describe('Directive: varslingsbox', function () {
  beforeEach(module('appsTfkPolitiskesakerApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<varslingsbox></varslingsbox>');
    element = $compile(element)($rootScope);
    expect(element.length).toBe(1);
  }));
});
