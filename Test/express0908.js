/**
 * Created by alone on 2016/9/8.
 */
var express=require('express');
var app=express();
var bodyparse=require('body-parser');
app.use(bodyparse.urlencoded(
    {
        extended:false
    }
));
var name;
app.use(express.static(__dirname+'/public'));
app.post('/mydir',function(req,res){
   console.log(req.body.name);
    name=req.body.name.toString();
});
app.get('/mydir',function(req,res){
    res.send('Browser result:'+name);
    res.end();
});
// app.get('/myroute',function(req,res){
//    res.send(req.query.name+req.query.country);
//     res.end();
// });
app.listen(12345);
