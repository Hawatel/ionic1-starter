/* similar pattern for each components */
import modController from './reddit.controller';
import modConfig from './reddit.config';
import srvReddit from './reddit.service';
import {delString} from 'shared/filters/general.filter';
import {imgPreLoading} from 'shared/directives/general.directive.js';


let mod = angular.module('app.reddit', []);

mod.config(modConfig);
mod.controller('redditCtrl', modController);
mod.service('redditSrv', srvReddit);
mod.filter('delString', delString);
mod.directive('imgPreloading', imgPreLoading);

export default mod = mod.name;
