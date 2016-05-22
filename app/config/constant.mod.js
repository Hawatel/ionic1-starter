/*
  This module allows to configure default application options
  You can add a new option to the config/default.config.json file and use in each controllers
  or others config files. Just pass CONFIG provider to any functions
*/

import defaultConfig from './default.config.json';
//import localConfig from './config.json';
import deepExtend from 'deep-extend';

let config = deepExtend(defaultConfig/*, localConfig*/);

let mod = angular.module('app.constant', []).constant('CONFIG', config);

export default mod = mod.name
