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
  console.log('Client connected')
  socket.on('message', (data) => {
    console.log(data)
  })
})

server.listen(4000)
console.log('Server listening on port', 4000)
