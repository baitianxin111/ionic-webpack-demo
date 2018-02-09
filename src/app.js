import './lib/angular/angular.min';
import './lib/angular-animate/angular-animate.min';
import './lib/angular-sanitize/angular-sanitize.min';
import './lib/angular-ui-router/release/angular-ui-router.min'
import './lib/ionic/js/ionic.min'
import './lib/ionic/js/ionic-angular.min';

var app = angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

export {app};
