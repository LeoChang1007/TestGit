/**
 * Created by alone on 2016/12/26.
 */
var dateFormat=require('dateformat');
var now = dateFormat(new Date(),'yyyy-mm-dd');
var a=null,b=null;
var sql='sfb25=decode(sfb08,sfb09+:completed_quantity,to_date(\'now\',\'YYYY-MM-DD\'),sfb25) ';
if(a<b+3){
    console.log(now);
    console.log(sql);
    console.log(a+8);
    console.log(Number(a));
}
