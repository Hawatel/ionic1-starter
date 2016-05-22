/* similar pattern for each components */
import modController from './location.controller';
import modConfig from './location.config';

let mod = angular.module('app.location', []);

mod.config(modConfig);
mod.controller('locationCtrl', modController);

export default mod = mod.name;
