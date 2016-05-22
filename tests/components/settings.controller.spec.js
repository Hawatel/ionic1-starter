import 'components/settings';
import 'config/constant.mod';

describe('settingsCtrl', () => {
  var scope;

  beforeEach(angular.mock.module('ionic'));
  beforeEach(angular.mock.module('ui.router'));
  beforeEach(angular.mock.module('app.constant'));
  beforeEach(angular.mock.module('app.settings'));

  beforeEach(inject(($rootScope, $controller) => {
    scope = $rootScope.$new();
    $controller('settingsCtrl', {$scope: scope});
  }));

  it('styles should exist', () => {
    expect(scope.styles).to.a('Object');
  });
});
