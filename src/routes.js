import {app} from './app';

app.config(($stateProvider, $urlRouterProvider,$ionicConfigProvider)=>{
  $ionicConfigProvider.templates.maxPrefetch(0);

  $stateProvider
    .state('test',{
      url:'/test',
      templateUrl:"./component/test/test.html",
    })

  $urlRouterProvider
    .otherwise("/test")
})
