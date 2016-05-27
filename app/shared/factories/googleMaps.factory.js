export default /* @ngInject */ function GoogleMaps($cordovaGeolocation, $ionicLoading, $rootScope,
                                          $cordovaNetwork, Markers, ConnectivityMonitor) {

  let opts = null;
  let map = null;

  function initMap() {
    let currentPosOpts = opts.currentPosOpts;

    $cordovaGeolocation.getCurrentPosition(currentPosOpts)
      .then((position) => {
        var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        map = createMap(latLng);
        waitForMap(map);

        let currentMarker = {
          position: {lat: position.coords.latitude, lng: position.coords.longitude},
          title: "Current location"
        }

        addMarker(currentMarker);

      }, (error) => {
        map = createMap(opts.map.latLng);
        waitForMap(map);
      });
  }

  function createMap(latLng) {
    let mapOptions = {
      center: latLng,
      zoom: opts.map.zoom,
      mapTypeId: eval(opts.map.type)
    };

    return new google.maps.Map(document.getElementById(opts.map.id), mapOptions);
  }

  function waitForMap(map) {
    //Wait until the map is loaded
    google.maps.event.addListenerOnce(map, 'idle', function() {
      loadMarkers();
      $ionicLoading.hide();
    });
  }

  function loadGoogleMaps() {
    $ionicLoading.show({
      template: 'Loading Google Maps'
    });

    //This function will be called once the SDK has been loaded
    window.mapInit = () => {
      initMap();
    }

    //Create a script element to insert into the page
    let script = document.createElement('script');
    script.type = "text/javascript";
    script.id = "googleMaps";

    //Note the callback function in the URL is the one we created above

    if(opts.map.url) {
      script.src = opts.map.url

      if(opts.sdk.sensor) {
        script.src += '?sensor=true';
      }
      else {
        script.src += '?sensor=false';
      }

      if(opts.sdk.apiKey) {
        script.src += opts.map.url + '&key=' + opts.sdk.apiKey;
      }

      if(opts.sdk.callBack) {
          script.src += opts.map.callBack + '&callback=' + opts.sdk.callBack;
      }
    }
    else {
      script.src = 'https://maps.googleapis.com/maps/api/js?sensor=false&callback=mapInit';
    }

    document.body.appendChild(script);
  }

  function checkLoaded() {
    if(typeof google == "undefined" || typeof google.maps == "undefined") {
      loadGoogleMaps();
    }
  }

  function loadMarkers() {
    //Get all of the markers from our Markers factory
    Markers.getMarkers().then((markers) => {

      let records = markers;

      for(let i = 0; i < records.length; i++) {
        addMarker(records[i]);
      }
    });
  }

  function addMarker(record) {
    let markerPos = new google.maps.LatLng(record.position.lat, record.position.lng);

    //Add the marker to the maps
    let marker = new google.maps.Marker({
      map: map,
      animation: eval(opts.marker.animation),
      position: markerPos
    });

    let infoWindowContent = "<h4>" + record.title + "</h4>";

    addInfoWindow(marker, infoWindowContent, record);
  }

  function addInfoWindow(marker, message, record) {
    let infoWindow = new google.maps.InfoWindow({
      content: message
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(map, marker);
    });
  }

  return {
    init: (options) => {
      if(typeof opts == "undefined") {
        return false;
      }

      opts = options;

      if(typeof google == "undefined" || typeof google.maps == "undefined") {
        console.warn("Google Maps SDK needs to be loaded");

        if(ConnectivityMonitor.isOnline()) {
          loadGoogleMaps();
        }
      }
      else {
        if(ConnectivityMonitor.isOnline()) {
          initMap();
        }
        else {
          // put a code if a user is offline
        }
      }

      checkLoaded();
    }
  }
}
