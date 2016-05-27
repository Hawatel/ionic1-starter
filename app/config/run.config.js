export default /* @ngInject */ function($ionicPlatform, $ionicLoading, ConnectivityMonitor) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);

      function online() {
        $ionicLoading.show({
          template: 'You are online',
          duration: 3000
        })
      }

      function offline() {
        $ionicLoading.show({
          template: 'You are offline',
          duration: 5000
        })
      }

      ConnectivityMonitor.startWatching(online, offline);

    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
}
