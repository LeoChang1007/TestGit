/**
 * Created by alone on 2016/9/9.
 */
var express=require('express');
//var cookieParser = require('cookie-parser');
var session = require('express-session')
var app=new express();

//app.use(cookieParser());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
}));
app.get('/mysessioncookie',function(req,res){
    if(req.session.count){
        req.session.count++;
    }
    else{
        req.session.count=1;
    }
    res.send('session count ='+req.session.count);
    //res.sendStatus(200);

    res.end();
});
app.listen(12345);