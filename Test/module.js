/**
 * Created by alone on 2016/9/7.
 */
var obj_mdle=['a','b','c'];
// for(var i in obj_mdle)
// {
//     console.log(i+':'+obj_mdle[i]);
// }

var async=require('async');
async.each(obj_mdle, function (item, next) {
        console.log(item);
        next();
    }, function () {
        console.log('the end');
    }
);
