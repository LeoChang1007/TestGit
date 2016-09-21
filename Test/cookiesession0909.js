/**
 * Created by alone on 2016/9/9.
 */
var express = require('express');
var cookieSession = require('cookie-session');
var bodyparse=require('body-parser');

var test=require('./test.js');
var app = new express();
app.use(cookieSession({
    key: 'node',
    secret: 'HelloExpress'
}));
app.use(bodyparse.urlencoded({extended:false}));

app.get('/mysession',function(req,res){
    req.session.views=(req.session.views || 0) + 1;
    res.end(req.session.views + ' views');
    //res.send('session count ='+req.session.count);
});

app.get('/login_page',function(req,res){
   if(req.session.logined){
       res.send('you  already logined');
       res.end();
       return;
   }
   test.getFile('login.html', function(strhtml){
       console.log(strhtml);
       res.send(strhtml);
   });
   // res.send(test.getFile('login.html'));
});

app.post('/mylogin',function(req,res){
   if(!(req.body.username=='Leo') || !(req.body.password ==12345)){
       res.send('帳密錯誤請重新登入');
       res.end();
       return;
   }
    req.session.logined=true;
    res.redirect('/login_page');
    res.end();
});

app.listen(12345);

