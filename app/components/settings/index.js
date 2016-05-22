/* similar pattern for each components */
import modController from './settings.controller';
import modConfig from './settings.config';

let mod = angular.module('app.settings', []);

mod.config(modConfig);
mod.controller('settingsCtrl', modController);

export default mod = mod.name;
