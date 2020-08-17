const app = require('express')();
const socketio = require('socket.io');

let namespaces = require('./classes/initialNamespaces');
//console.log(namespaces[0]);


const expressServer = app.listen(8000)
const io = socketio(expressServer);

io.on('connection', (socket, req) => { // or connect
  socket.emit("wellcome", "wellcome aboard!!", "my man")
  console.log(`${socket.id} has joined '/'`);
  let nsData = namespaces.map((ns) => {
    return {
      title: ns.title,
      imageUrl: ns.imageUrl,
      endpoint: ns.endpoint,
      rooms: ns.rooms
    }
  });
  socket.emit("nsData", nsData);

  socket.on('joinRoom', (joinToRoom) => {
    socket.join(joinToRoom);
    console.log(`${socket.id} has joined ${joinToRoom}`);
  })
});

// namespaces.forEach((namespace) => {
//   // namespace.rooms.forEach(room => {

//   // })
//   io.of(namespace.endpoint).on('connection', (nsSocket) => {
//     console.log(`${nsSocket.id} has joined ${namespace.endpoint}`);
//     nsSocket.on('joinRoom', (joinToRoom) => {
//       nsSocket.join(joinToRoom);
//     })
//   })
// })
