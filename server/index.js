var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var moment = require('moment');
var port = 3000;

var messages = [
    {
        text: 'Welcome, set your nickname and start typing! ',
        nickname: 'Bot',
        time: moment().format('LTS')

    }
]

app.use(express.static('client'));

io.on('connection', function (socket) {
    console.log('IP: ' + socket.handshake.address + ' connected.');
    socket.emit('messages', messages);
    socket.on('add-message', function (data) {
        data.time = moment().format('LTS');
        messages.push(data);
        io.sockets.emit('messages', messages);
    })
});

server.listen(port, function () {
    console.log('Server started at http://localhost:' + port);
});
