import { ionic } from 'ionic-webpack';
import { positionService } from './services/positionService';
import { ngCordova } from './directives/myCordova';

let app = angular.module('starter', [
  ionic,
  positionService,
  ngCordova,
]).run(($ionicPlatform, positionService, $rootScope,$interval,$timeout,$window,$cordovaToast)=>
  {
    $ionicPlatform.registerBackButtonAction(()=>
    {
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
        $timeout(()=>{
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
