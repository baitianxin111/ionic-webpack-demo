import angular from "angular";
import "./ionic-cordova/src/plugins/toast";
const name = 'ionCordova';
angular.module(name,[
  'ionCordova.plugins.toast',
])

export var ngCordova = name;
