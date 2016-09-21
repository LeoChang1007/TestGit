/**
 * Created by alone on 2016/9/7.
 */
var fs=require('fs');
var buf=new Buffer(1024);
var fpath=__dirname+'/fs.txt';

fs.stat(fpath,function(err,stats){
    if(err)
        console.log(err);
    else {
        if (stats.isFile()) {
            fs.open(fpath, 'r+', function (err, fd) {
                if (err) console.log(err);
                fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
                    if (err) console.log(err);
                    if (bytes) {
                        console.log(buf.slice(0, bytes).toString());
                    }
                });
                fs.appendFile(fpath,'data append',function(err){
                   if(err) throw err;
                });
                fs.close(fd,function(err){
                    if (err) console.log(err);
                });

            });

        }
        else {
            console.log('not file');
        }
    }
})
//readFile
// fs.readFile(_fpath,function(error,content){
//     if(error)
//         console.log(error.message);
//     else
//         console.log(content.toString());
// });
