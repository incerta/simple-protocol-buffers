const http = require('http')
const serializers = require('../serializers')

const app = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')

  switch (req.method) {
    case 'GET': {
      return res.write(
        serializers.message.makeBinary({ id: 1, body: 'body:1' }),
        'binary',
        () => res.end()
      )
    }

    case 'POST': {
      const chunks = []
      req.on('data', (chunk) => chunks.push(chunk))

      return req.on('end', () => {
        const buffer = Buffer.concat(chunks)
        const message = serializers.message.readBinary(buffer)

        res.writeHead(200).end(JSON.stringify(message))
      })
    }
  }
})

app.listen(8000)
