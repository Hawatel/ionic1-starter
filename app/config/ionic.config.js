/* configuration for Ionic */
export default /* @ngInject */ function(CONFIG, $ionicConfigProvider) {
    $ionicConfigProvider.views.maxCache(CONFIG.ionic.cache.views || 10);
    $ionicConfigProvider.views.forwardCache(CONFIG.ionic.cache.forward || false);
    $ionicConfigProvider.scrolling.jsScrolling(CONFIG.ionic.view.jsScrolling || false);
    $ionicConfigProvider.backButton.previousTitleText(CONFIG.ionic.view.backButton.previousTitleText);
    $ionicConfigProvider.backButton.text(CONFIG.ionic.view.backButton.text);
}
