/**
 * Created by alone on 2016/9/10.
 */
var srcAry=[6,5,8,10,45];
var objAry=[{id:1},{id:2}];
var fs=require('fs');
var path = require('path')

fs.readdir(__dirname,function(err,files) {
    if(err){
        console.log("err");
        return;
    }
    var paths=files.map(function(file){
        return file;
    });
    paths.forEach(function(val){
       console.log(val);
    });


})

var rstAry=srcAry.filter(function(val){return val>=6 }).
    reduce(function(pre,cur){
        return Math.max(pre,cur);
    });
console.log(rstAry);
// rstAry.forEach(function(value,index,ary){
//     ary[index]=ary[index]+1;
//     console.log("rstAry["+index+"]="+rstAry[index]);
// })

