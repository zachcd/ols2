import * as http from 'http'
import koa from 'koa'
import logger from 'koa-logger'
import IO from 'koa-socket'
import co from 'co'

const app = new koa()
const io = new IO()
const chat = new IO('chat')

app.use(logger())

// Everything else socket
io.attach(app

// Chat socket
chat.attach(app)

/**
 * Socket handlers
 */
io.on( 'connection', ctx => {
  console.log( 'Join event', ctx.socket.id )
  io.broadcast( 'connections', {
    numConnections: io.connections.size
  })
  // app.io.broadcast( 'connections', {
  //   numConnections: socket.connections.size
  // })
})

io.on( 'disconnect', ctx => {
  console.log( 'leave event', ctx.socket.id )
  io.broadcast( 'connections', {
    numConnections: io.connections.size
  })
})

io.on( 'data', ( ctx, data ) => {
  console.log( 'data event', data )
  console.log( 'ctx:', ctx.event, ctx.data, ctx.socket.id )
  console.log( 'ctx.teststring:', ctx.teststring )
  ctx.socket.emit( 'response', {
    message: 'response from server'
  })
})

io.on( 'ack', ( ctx, data ) => {
  console.log( 'data event with acknowledgement', data )
  ctx.acknowledge( 'received' )
})

io.on( 'numConnections', packet => {
  console.log( `Number of connections: ${ io.connections.size }` )
})

/**
 * Chat handlers
 */
chat.on( 'connection', ctx => {
  console.log( 'Joining chat namespace', ctx.socket.id )
})

chat.on( 'message', ctx => {
  console.log( 'chat message received', ctx.data )

  // Broadcasts to everybody, including this connection
  app.chat.broadcast( 'message', 'yo connections, lets chat' )

  // Broadcasts to all other connections
  ctx.socket.broadcast( 'message', 'ok connections:chat:broadcast' )

  // Emits to just this socket
  ctx.socket.emit( 'message', 'ok connections:chat:emit' )
})

app.listen( process.env.PORT || 3200)
