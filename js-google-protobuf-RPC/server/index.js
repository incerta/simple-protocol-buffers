const grpc = require('@grpc/grpc-js')
const services = require('../proto/greeter_grpc_pb')

const PORT = process.env.PORT || 8000

function sayHello(call, callback) {
  const res = new proto.greeter.HelloReply()
  res.setMessage(`Hi ${call.request.getName()}`)

  callback(null, res)
}

const server = new grpc.Server()

server.addService(services.GreeterService, { sayHello })
server.bindAsync(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure(), () => {
  server.start()
})
