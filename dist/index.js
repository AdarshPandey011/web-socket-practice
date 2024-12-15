"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
wss.on('connection', function (socket) {
    console.log('user connected');
    socket.send('hi there ');
    setInterval(() => {
        // socket.send('Kuch bolo');
    }, 500);
    // console.log('socket',socket)
    socket.on('message', (e) => {
        // console.log(e.toString())
        let msg = e.toString();
        if (msg === 'ping') {
            socket.send('Pong');
        }
    });
});
