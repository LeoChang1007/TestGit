/**
 * Created by alone on 2016/9/21.
 */
/*
1.promise 可以由兩種方式撰寫
    a.Q.deferred  b.Q.Promise(function(resolve,reject,notify){})
    目前先學 a寫法
2.Promise有三種狀態 unfulfilled,fulfilled,failed
  狀態只可由未完成-->完成 或是未完成-->失敗
  狀態轉換只可發生一次
3.承諾有一個then()方法，可以接受3個函數作為參數。前兩個函數對應承諾的兩種狀態完成，被拒絕的回調函數。第三個函數用於處理進度信息。
         promiseSomething().then(function(fulfilled){
         //当promise狀態變成fulfilled时，调用此函数
         },function(rejected){
         //当promise狀態變成rejected时，调用此函数
         },function(progress){
         //当返回进度信息时，调用此函数
         });
4.在promise chain中時若沒有提供fulfilled函數或是reject函數　則會繼續將promise身上帶的value或是exception傳到下一個promise對應的函數
5.當要"有順序"的執行很多promise functions時可以將function包成陣列用reduce pre.then(cur) code比較簡潔
  無順序　可用Q.all
6.Q object
 Q(value)
 If value is a Q promise, returns the promise.
 If value is a promise from another library it is coerced into a Q promise (where possible).
 If value is not a promise, returns a promise that is fulfilled with value.
7. then 方法裡面可以　用return 傳遞會自動變成promise ex:function(){return val } 也可以用defer.resolve(val)做傳遞
8.若遇到需執行多次非同步function　最中將每個val包成array，則可以用map 搭配　denodify & Q.all()

 */
var fs=require('fs');
var path=require('path');
var Q= require('q');
var defer=Q.defer();
var fs_stat=Q.denodeify(fs.stat);
var promise=new Q(__dirname);
var _ = require('lodash');
var list;

function getfile(dirname){
    var defer=Q.defer();
    fs.readdir(dirname,function(err,files) {
      if(!err && files){
           list=files.filter(function(file){
              return file.match(new RegExp("\\.js$"))
          })
          defer.resolve(list)
      }
      else
          defer.reject(err)
    })
    return defer.promise;
}

function getStat(paths){
    var defer=Q.defer();
    var aryStat=[];
    var largest;

    getMax(function(err,aryStat){
        largest=aryStat.filter(function (stat) {
              return stat.isFile;
          }).reduce(function (pre, cur) {
              if (pre.size > cur.size) return pre;
              return cur;
          })
          console.log(list[aryStat.indexOf(largest)] + ":", largest.size);
          defer.resolve(aryStat.indexOf(largest));

      })

    function getMax(cb){
        _.forEach(paths,function(fpath,index){
            fpath=path.join(__dirname,fpath);
            fs.stat(fpath, function (err, stat) {
                aryStat[index]=stat;
                if(aryStat.length==paths.length) cb(null,aryStat);
            })
            // aryStat.push(fs.statSync(fpath));
            // if(aryStat.length==paths.length) cb(null,aryStat);
        })
    }
    return defer.promise;
}


// var funcs=[getfile,getStat];
// funcs.reduce(function(pre,cur){
//     return pre.then(cur);
// },promise).then(function(size){console.log(size)})


// promise
//     .then(getfile)
//     .then(foo)
//     .then(foo)
//     .then(foo)
// function foo(result) {
//     console.log(result);
//     return 100;
//     }


promise
    .then(getfile)
    .then(getStat)
    .then(function(index){console.log(list[index])})

//
// function foo(result) {
//     console.log(result);
//     return result+result;
// }
//
// var funcs = [foo,foo,foo];
//
// funcs.reduce(function(prev,current){
//     return prev.then(current);
// },Q('hello'));
//


