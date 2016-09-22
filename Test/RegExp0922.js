/**
 * Created by alone on 2016/9/22.
 */

var str="$apple test"
 if(str.match(new RegExp("\\$app"))) console.log("true")



var str = 'For more information, see Chapter 3.4.5.1';
var re = /see (chapter \d+(\.\d)*)/gi;
var found = str.match(re);

console.log(found);