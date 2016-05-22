/* constants */
import 'ionic-sdk/release/js/ionic.bundle';
import 'ng-cordova';
import './assets/scss/index';
import modConstant from './config/constant.mod';
import configRun from './config/run.config';
import configRouter from './config/router.config';
import configIonic from './config/ionic.config';

/* my modules */
/*********************my modules*************************/
import modHome from './components/home';
import modLocation from './components/location';
import modReddit from './components/reddit';
import modSettings from './components/settings';
/********************************************************/

let app = angular.module('app', [
  'ionic', 'ui.router', 'ngCordova',
  modConstant,
  modHome, modReddit, modLocation, modSettings
]);

/* set up configuration */
app.config(configRouter);
app.config(configIonic);
app.run(configRun);
