/**
 * Created by alone on 2016/9/10.
 */
var async=require('async')
var fs=require('fs')
function testasync(a,cb){
    async.waterfall([
        function(next){
            a++;
            var b=a+1;
            fs.readFile(__filename,next)
        },
        function(aa,next){

            next(null,aa);
        }
    ],cb)
}
testasync(100,function(err, val){
    console.log("main funciton:"+val);
})