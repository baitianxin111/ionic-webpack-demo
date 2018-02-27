import './temp.scss';

let view = {
  name :"temp",
  config:{
    url:"/temp",
    templateProvider: function($q) {
      let deferred = $q.defer();
      require.ensure(['./temp.html'], (require)=> {
        let template = require('./temp.html');
        deferred.resolve(template);
      }, 'temp');
      return deferred.promise;
    },
    resolve: {
      'tempModule': function($q, $ocLazyLoad) {
        let deferred = $q.defer();
        require.ensure(['./tempController.js'], require => {
          require('./tempController.js');
          $ocLazyLoad.load({
            name: "starter"
          });
          deferred.resolve();
        }, 'temp');
        return deferred.promise;
      }
    }
  }
};

export {
  view
}
