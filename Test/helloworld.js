/**
 * Created by alone on 2016/9/5.
 */
/**var http=require('http');
 http.createServer(function (req,res) {
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hello World\n');
}).listen(1337,'127.0.0.1');
 console.log('server running at http://127.0.0.1:1337/');*/

/*
 var obj1={};
 Object.defineProperty(obj1,"x",{value:"defineProperty",writable:false});
 obj1.x=5;
 var isEnd =true;
 var company =new Object();
 company.name="alpha";
 company.estDate=new Date().setFullYear(1985,9,14);
 if(isEnd) {
 console.log('function is in the end\t' + company.estDate);
 }
 var company2={'name':'tsmc','calc_Salary':(function(num){return num+500})(500)};
 var a=new String(123);
 console.log(company2.calc_Salary+company2.name.split("").reverse().join(""),Number(null),a,a instanceof String);
 var done=1;
 var result=void done++;
 var booDone=delete done;

 var fnPrint=function(val){console.log(val)};

 fnPrint(2);
 fnPrint=null;

 (function(val){console.log(val)})(3);
 (function(val){console.log(val)}(4));
 void function(val){console.log(val)}(5);

 function glass(name){
 function getGlass(num) {
 name+="123";
 console.log(name + "度數:" + num);
 return num;
 }
 return getGlass;
 }
 var lily=glass("lily");
 var lisa=glass("lisa");
 lisa(5);
 lily(100);

 var MyObject=function(){this.count=0};
 MyObject.prototype.touch=function (){console.log("touch") }
 MyObject.prototype.skin="black";
 var myObj=new MyObject();
 myObj.touch();
 myObj.touch();
 myObj.touch();
 console.log(myObj.count);

 var myvar=null;
 delete myvar?console.log("true"):console.log("false");*/
/*
 console.log(__filename+" "+ __dirname);
 for (var i in process.argv){
 console.log('argv['+i+']='+ process.argv[i]+ ""+  process.memoryUsage());
 }
 */
var util = require('util');
var Obj = function () {
    this.num = function (val) {
        return val + 5
    };
};
Obj.prototype.color = "white";
Obj.prototype.price = 500;
Obj.prototype.hit = function () {
    this.price++;
}

var myObj = new Obj();
myObj.hit();
//console.log(myObj.num(600));
console.log(myObj.price);
var cObj = function () {
};
util.inherits(cObj, Obj);
var myCObj = new cObj();

myCObj.hit();
myCObj.hit();
myCObj.hit();
myCObj.hit();
console.log(myCObj.price);
console.log(myObj.price,__dirname);


