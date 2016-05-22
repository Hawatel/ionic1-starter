export default /* @ngInject */ function($stateProvider) {
  $stateProvider.state('app.settings', {
    url: '/settings',
    views: {
      'menuContent': {
        template: require('./settings.view.html'),
        controller: 'settingsCtrl',
      }
    }
  });
}
