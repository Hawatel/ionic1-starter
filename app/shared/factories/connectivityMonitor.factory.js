export default /* @ngInject */ function connectivityMonitor($rootScope, $cordovaNetwork) {
  return {
    isOnline: function() {
      if(ionic.Platform.isWebView()) {
        return $cordovaNetwork.isOnline();
      } else {
        return navigator.online;
      }
    },
    isOffline: function() {
      if(ionic.Platform.isWebView()) {
        return !$cordovaNetwork.isOnline();
      } else {
        return !navigator.onLine;
      }
    },
    startWatching: function(online, offline) {
      if(ionic.Platform.isWebView()) {
        $rootScope.$on('$cordovaNetwork:online', function(event, networkState) {
          if(typeof online === 'function') {
            online();
          }
        });

        $rootScope.$on('$cordovaNetwork:offline', function(event, networkState) {
          if(typeof offline === 'function') {
            offline();
          }
        });
      }
      else {
        window.addEventListener("online", function(e) {
          if(typeof online === 'function') {
            online();
          }
        }, false);

        window.addEventListener("offline", function(e) {
          if(typeof offline === 'function') {
            offline();
          }
        }, false);
      }
    }
  }
}
