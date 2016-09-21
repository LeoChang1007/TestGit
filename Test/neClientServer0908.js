/**
 * Created by alone on 2016/9/8.
 */
//
var net = require('net');
var child_process = require('child_process');
var server = net.createServer();
server.listen(5678);
server.on('connection', function (socket) {
    socket.write("connect success");
    var child = child_process.spawn('node', ['module.js']);
    child.stdout.on('data', function (data) {
        socket.write(data);
    });

    child.on('exit',function(code){
        socket.destroy();
        console.log('server socket destroy'+code);
        child=null;
    });
    socket.on('end',function(){
            console.log('server receive socket.destroy');
            if(child) {
                console.log('server try to kill child');
                child.kill();
            }
    });
});

var netClient = require('net');
var socket = new netClient.Socket();

socket.connect(5678, 'localhost', function () {
    socket.on('data', function (chunk) {
        console.log(chunk.toString());
    });
    socket.on('end',function(){
       console.log('connect end');
    });
    setTimeout(function(){
        console.log('exec setTimeout');
        socket.destroy();
    },5000);
});



