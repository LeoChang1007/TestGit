/**
 * Created by alone on 2016/9/7.
 */
var http=require('http');
var url=require('url');
var path=require('path');
var fs=require('fs');
// 須執行http://localhost:12345/fs.txt

 http.createServer(function(req,res){
     //var filename=path.basename(url.parse(req.url).path);
     var filename=url.parse(req.url).pathname.split('/').pop();
    var filepath=path.join(__dirname,filename);
    fs.exists(filepath,function(exists){
       if(!exists){
           res.writeHead(404,{'content-type':'text/plain'});
           res.end('Not Found\n');
           return;
       }
       else{
           fs.readFile(filepath,function(err,context){
               if(err)
               {console.log(err);
               }
               else{
                   res.end(context.toString());
               }
           })
       }
    });
    //
    // res.writeHead(200,{'context-type':'text-plain'});
    // res.end('Hello test');
}).listen(12345);


