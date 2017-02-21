/**
 * Created by alone on 2016/12/22.
 */
var a=require('./exportVSmodele_export')
a();

function requireAA(){
  var M={e:{}};
    (function(M,e){
        function tt(i){console.log(456+i)};
        e=M.e=tt;

    })(M,M.e);
    return M.e;
};

var B=requireAA();
B(2);

