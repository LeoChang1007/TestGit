/**
 * Created by alone on 2016/9/22.
 */
var _ = require('lodash');
var format = require('string-format');
/*var str="apple test"
// if(str.match(new RegExp("\\$app"))) console.log("true")

var reg=new RegExp('(\\w+)\\s(\\w+)','g');*/

//var result=reg.exec(str)
/*var result=str.replace(reg,'$2,$1');
console.log(result);*/

var str = 'For more more information, see Chapter 3.4.5.1,see Chapter 3.4.6.1';
/*var re = /see (Chapter \d+(\.\d)*)/g;
var found = str.match(new RegExp('see (Chapter \\d+(\\.\\d)*)','g'));
console.log(re.exec(str));
console.log(found);*/
/*
var re= new RegExp('(\\d+\\.\\d\\.(?!6|5))','g');
console.log(str.match(re));*/
var re=new RegExp('(more\\s)\\1','g');
//console.log(str.match(re));

var machineModel = 'CREATE TABLE IF NOT EXISTS machines(id UUID PRIMARY KEY, ' +
    'name2q_  TEXT UNIQUE NOT NULL, ww TEXT UNIQUE NOT NULL,description TEXT, image_id UUID, purchase_date DATE, '+
    'move_in DATE, property_no TEXT, tech_doc UUID, user_manual UUID, '+
    'type_id UUID, type_name TEXT, type_no TEXT, '+
    'work_center_id UUID, work_center_name TEXT, work_center_no TEXT, '+
    'last_ts TIMESTAMP, last_uid UUID, state INT DEFAULT 0,UNIQUE(group_id, api)) ';
var re=new RegExp('(IF NOT EXISTS)','gi');
//console.log(machineModel.match(re));
//console.log(machineModel.replace(re,""));
var reg=new RegExp('(\\w)+\\s+(\\w)+\\s+(UNIQUE)','gi');

var reIfNotExist=new RegExp('(CREATE\\s*TABLE\\s*IF\\s*NOT\\s*EXISTS)','gi');
console.log(machineModel.replace(reIfNotExist,'CREATE TABLE'));


/*var result=machineModel.match(reg);


var ary=result[0].toString().split(" ");
console.log(result);
console.log(ary);
console.log(machineModel.replace(reg,""));*/
/*
var rege=new RegExp('UNIQUE(?!\\()','gi');
console.log(machineModel.match(rege));*/
var handleExist='execute immediate v_sql; '+
'EXCEPTION '+
  'WHEN OTHERS THEN '+
   'IF SQLCODE = -955 THEN '+
     'NULL ; ' +
   'ELSE '+
     'RAISE; '+
   'END IF; '+
'END; '
/*
var reg=function(str){
 re=new
};
*/

var translator=function(inStr){
 var colName;
 var uniqCstrStrTmp=',CONSTRAINT {0}_unique UNIQUE ({0})';
 var uniqCstrStr="";
 _.forEach(inStr.match(reg),function(val)
     {
      colName=val.split(" ")[0];
      uniqCstrStr+=format(uniqCstrStrTmp,colName);
      console.log(uniqCstrStr);
     })
};
translator(machineModel);