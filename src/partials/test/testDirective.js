import {app} from '../../app';

app.directive('testDirective',()=>{
  return {
    template:`
      <div>12345</div>
    `,
    link:function ($element,$scope,$attrs)
    {
      require.ensure([],(require)=>{
        var squel = require("squel");
        let sql =  squel.select()
          .from("table", "t1")
          .field("t1.id")
          .field("t2.name")
          .left_join("table2", "t2", "t1.id = t2.id")
          .group("t1.id")
          .where("t2.name <> 'Mark'")
          .where("t2.name <> 'John'")
          .toString();
        console.log(sql)
      },'test')
    }
  }
})
