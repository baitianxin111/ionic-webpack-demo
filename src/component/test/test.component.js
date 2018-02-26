import test from './test.html';
import './testController';
import './test.scss';
import 'angular';
angular.module("ng").run(($templateCache)=>{
  $templateCache.put('./component/test/test.html',test)
})
