import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({port:8080});

// wss.on('connection',function(socket){
//     console.log('user connected');
//     socket.send('hi there ');

//     setInterval(()=>{
//         // socket.send('Kuch bolo');
//     },500)

//     // console.log('socket',socket)
//     socket.on('message',(e)=>{
//         // console.log(e.toString())
//         let msg = e.toString();

//         if(msg === 'ping'){
//             socket.send('Pong')
//         }
//     })
// })