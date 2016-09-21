/**
 * Created by alone on 2016/9/21.
 */

var fs=require('fs');
var path=require('path');
var Q= require('q');
var defer=Q.defer();
var fs_stat=Q.denodeify(fs.stat);
var promise=new Q();
var _ = require('lodash');
var list;
function getfile(dirname){
    var defer=Q.defer();
    fs.readdir(dirname,function(err,files) {
      if(!err && files){
          defer.resolve(files)
      }
      else
          defer.reject(err)
    })
    return defer.promise;
}

function getStat(paths){
    var defer=Q.defer();
    var aryStat=[];

    function getcb(cb){
        _.forEach(paths,function(fpath){
            fpath=path.join(__dirname,fpath);
            fs.stat(fpath, function (err, stat) {
                aryStat.push(stat);
                if(aryStat.length==paths.length) cb(null,aryStat);
            })
        })
    }
    getcb(function(err,aryStat){
        var largest=aryStat.filter(function(stat){
            return stat.isFile;
        }).reduce(function(pre,cur){
            if(pre.size>cur.size) return pre;
            return cur;
        })
        defer.resolve(aryStat.indexOf(largest));
    })
    return defer.promise;
}


promise
    .then(function() {
        return getfile(__dirname)
    })
    .then(function(files){
        list=files;
        return getStat(files)
    })
    .then(function(index){
        return console.log(list[index])
    })





