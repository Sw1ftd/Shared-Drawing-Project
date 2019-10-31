var express = require('express')
var app = express()

var server = app.listen(80)
app.use(express.static('public'))

var socket = require('socket.io')
var io = socket(server)
console.log("Server running")

io.sockets.on('connection', newConnection)

function newConnection(socket){
    console.log('new connection: ' + socket.id)
    
    socket.on('mouse', mouseMsg)
    
    function mouseMsg(data) {
        socket.broadcast.emit('mouse', data)
        console.log(data)
    }
}
