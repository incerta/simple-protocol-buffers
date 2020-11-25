const http = require('http')
const serializers = require('../serializers')

const app = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')

  if (req.url.match(/^\/greeter\/SayHello/) && req.method === 'POST') {
    const chunks = []
    req.on('data', (chunk) => chunks.push(chunk))

    return req.on('end', () => {
      const buffer = Buffer.concat(chunks)
      const uint8Arr = new Uint8Array(buffer)

      const reqData = serializers.HelloRequest.decode(uint8Arr)
      const message = `Hello ${reqData.name}!`

      return res.write(
        serializers.HelloReply.encode({ message }).finish(),
        'binary',
        () => res.end()
      )
    })
  }

  return res.writeHead(500)
})

app.listen(8000)
