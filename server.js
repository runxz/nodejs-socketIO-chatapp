const express = require('express');
const app = express();
const http = require('http');
const socketio = require('socket.io');
const server = http.createServer(app);
const io = socketio(server);

// Add this line to serve static files from the 'public' directory
app.use(express.static(__dirname + '/public'));

io.on('connection', (socket)=>{
   console.log('a user connected');

   socket.on('chat message', (msg) =>{
       io.emit('chat message', msg);
   });

   socket.on('disconnect', ()=>{
       console.log('user disconnected');
   });
});

server.listen(3000, () => {
   console.log('listening on *:3000');
});
