/* similar pattern for each components */
import modController from './location.controller';
import modConfig from './location.config';

import facMarkers from '../../shared/factories/markers.factory';
import facGoogleMaps from '../../shared/factories/googleMaps.factory';

let mod = angular.module('app.location', ['ionic']);

mod.config(modConfig);
mod.controller('locationCtrl', modController);
mod.factory('Markers', facMarkers);
mod.factory('GoogleMaps', facGoogleMaps);

export default mod = mod.name;
