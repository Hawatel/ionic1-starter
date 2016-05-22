import styles from './style.scss';

export default /* @ngInject */ function($scope, $ionicLoading, $cordovaGeolocation, CONFIG) {
  $scope.styles = styles; //styles are assigned to the component view by ng-class
  $scope.activeWatcher = false;

  let opts = CONFIG.googleMaps;
  let watcher;

  $ionicLoading.show({
    template: '<ion-spinner icon="bubbles"></ion-spinner><br/>Acquring location!'
  });

  $scope.loadMap = () => {
    $cordovaGeolocation.getCurrentPosition(opts.currentPosOpts)
      .then((position) => {
        opts.map.latLng = { lat: position.coords.latitude,  lng: position.coords.longitude};

        this._showMap(opts.map.latLng);
        $ionicLoading.hide();

      }, (err) => {
        $ionicLoading.hide();
        this._showMap(opts.map.latLng);
      });
    };

    /* private methods */

    this._showMap = (myLatLng) => {
      var map = new google.maps.Map(document.getElementById(opts.map.id), {
        center: myLatLng,
        zoom: opts.map.zoom,
        mapTypeId: eval(opts.map.type)
      });

      var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        Title: 'You are here!'
      })
    };

}
