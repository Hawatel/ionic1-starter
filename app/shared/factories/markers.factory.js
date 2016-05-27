export default /* @ngInject */ function Markers(CONFIG) {
  var markers = CONFIG.googleMaps.marker.defaultMarkers;

  return {
    getMarkers: function(params){
      // simulate promise
      return new Promise((resolve, reject) => {
          window.setTimeout(() => {
            resolve(markers)
          }, 1000)
      });
    }
  }
}
