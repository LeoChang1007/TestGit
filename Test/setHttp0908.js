/**
 * Created by alone on 2016/9/8.
 */
var http=require('http');
var path=require('path');
var url=require('url');
var fs=require ('fs');
//https://nodejs.org/dist/v6.5.0/win-x64/node.exe

var tgtURL=process.argv[2]||null;
if (!tgtURL){
    console.log('no url,pls try again');
    process.exit();
}
var urlObj=url.parse(tgtURL);
var req=http.request(
    {
        hostname:urlObj.hostname,
        path:urlObj.path,
        method:'GET'
    },
    function(res){
        var filename=path.basename(urlObj.path);
        fs.exists(filename,function(exists)
            {
                if(exists){
                 fs.unlink(filename,function(err){
                     if(!err){
                         saveFile();
                     }
                    });
                }
                saveFile();
            }
        );
        function saveFile(){
            res.on('data',function (data) {
                fs.appendFileSync(filename,data);
            });
        }

        res.on('end',function(code){
            console.log('exit'+code);
           //process.exit();
        });
    }
)
req.end();
