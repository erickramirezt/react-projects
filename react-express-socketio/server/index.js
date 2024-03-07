import express from 'express'
import http from 'http'
import { Server as SocketServer } from 'socket.io'

const app = express()
const server = http.createServer(app)
const io = new SocketServer(server, {
  cors: {
    origin: 'http://localhost:5173',
  },
})

io.on('connection', (socket) => {
  console.log(socket.id)
  socket.on('message', (body) => {
    console.log(body)
    // store the message in a database

    // send the message to all the clients
    socket.broadcast.emit('message', {
      body,
      from: socket.id.slice(6),
    })
  })
})

server.listen(4000)
console.log('Server listening on port', 4000)
