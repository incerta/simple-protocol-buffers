// Working nodejs static client example

const grpc = require('@grpc/grpc-js')
const service = require('./proto/greeter_grpc_pb')

const client = new service.GreeterClient('localhost:8000', grpc.credentials.createInsecure())

const request = new proto.greeter.HelloRequest()
request.setName('Konstantin')


client.sayHello(request, (err, response) => {
  if (err) {
    return console.log(err)
  }

  const message = response.getMessage()
  console.log(message)
})

