/* similar pattern for each components */
import modController from './home.controller';
import modConfig from './home.config';

let mod = angular.module('app.home', []);

mod.config(modConfig);
mod.controller('homeCtrl', modController);

export default mod = mod.name;
