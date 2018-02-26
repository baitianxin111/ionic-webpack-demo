import { app } from './app';
import { view as temp } from './component/temp';
import './component/test/index';

app.config(($stateProvider, $urlRouterProvider,$ionicConfigProvider,$locationProvider)=>{
  $ionicConfigProvider.templates.maxPrefetch(0);
  $locationProvider.hashPrefix("");
  $stateProvider
    .state('test',{
      url:'/test',
      templateUrl:"./component/test/test.html",
    })
    .state(temp.name,temp.config);

  $urlRouterProvider
    .otherwise("/test")
})
