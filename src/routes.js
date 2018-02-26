import {app} from './app';

app.config(($stateProvider, $urlRouterProvider,$ionicConfigProvider,$locationProvider)=>{
  $ionicConfigProvider.templates.maxPrefetch(0);
  $locationProvider.hashPrefix("");
  $stateProvider
    .state('test',{
      url:'/test',
      templateUrl:"./component/test/test.html",
    })

  $urlRouterProvider
    .otherwise("/test")
})
