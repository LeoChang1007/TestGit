/**
 * Created by alone on 2016/9/12.
 */

var _ =require('lodash')
var Q=require('q')
var obj=new Array();
var charsLeftIndex = require('lodash._charsleftindex');
var charsRightIndex = require('lodash._charsrightindex');
//callback

var getreduce=function(cb) {
    var cnt=3;
    _.reduce({'a': 1, 'b': 2, 'c': 1}, function (result, value, key) {
        (result[value] || (result[value] = [])).push(key);
        if(--cnt==0) cb(result);
        return result;
    }, {})
}

getreduce(function(val){console.log(val)});

//promise
// var getreduce=function() {
//     var deferred=Q.defer();
//     var val=_.reduce({'a': 1, 'b': 2, 'c': 1}, function (result, value, key) {
//         (result[value] || (result[value] = [])).push(key);
//             return result;
//     }, {})
//     deferred.resolve(val);
//     return deferred.promise;
//
// }
//
// getreduce().then(function(val){console.log(val)});

console.log(_.chunk(['a', 'b', 'c', 'd'], 3));


var users = [
    { 'user': 'barney',  'active': false },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': true }
];

console.log( _.dropRightWhile(users, { 'user': 'barney', 'active': false }));


var strTrim="AND AND AND bc AND";
console.log(charsLeftIndex(strTrim,'A'))
console.log(charsRightIndex(strTrim,'A'))
console.log(strTrim.slice(3,7))

var tgt={a:"123",b:"456"}
var src={c:"123",d:"456"}
console.log(_.merge(tgt,src))

var query={0:{"data":"index"},0:{"name":"leo"},0:{"search":{"value":123}}}
console.log(_.get(query,[0,"search","value"]),query[0]["search"]["value"])

var re = /apples/gi;
var str = "aapples are rounds , and apples are juicy.";
// var newstr = str.replace(re, function(match,p1){
//     return '$'+str.length;
// });
// console.log(newstr)

var re=/\bap/
console.log(str.match(re))

setTimeout(function(){console.log("alert")},3000)