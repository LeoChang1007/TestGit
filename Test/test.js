/**
 * Created by alone on 2016/9/8.
 */
var fs=require('fs');
var path=require('path')

exports.getFile=function(fileName, callback) {

    var filePath = path.join(__dirname, 'public', fileName);
    var content;
    fs.readFile(filePath, function(err, data) {
        content=data.toString();
        callback(content);
    });
};