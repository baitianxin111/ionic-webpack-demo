import './ionic'
import './services/positionService';
import './services/myCordova'

var app = angular.module('starter', [
  'ionic',
  'positionService',
  'ionCordova'
]).run(function ($ionicPlatform, positionService, $rootScope, $ionicPopup,$interval,$timeout,$state,$window,$cordovaToast)
  {

    $ionicPlatform.registerBackButtonAction(function (e) {

      if($rootScope.exitPopup.time===0)
      {
        $cordovaToast
          .showWithOptions({
            message:"再按一次退出",
            duration:"long",
            position:"bottom",
            addPixelsY:-150
          });
        $rootScope.exitPopup.time=1;
        $timeout(function(){
          $rootScope.exitPopup.time=0;
        },500)
      }
      else if($rootScope.exitPopup.time===1)
      {
        window.ionic.Platform.exitApp();
      }

    }, 999);

    $ionicPlatform.ready(function ()
    {
      if ($window.cordova && $window.cordova.plugins.Keyboard) {
        $window.cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        $window.cordova.plugins.Keyboard.disableScroll(true);
      }
      if ($window.StatusBar) {
        $window.StatusBar.styleDefault();
      }
    });
  })

export {app};
