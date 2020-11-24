const http = require('http')
const serializers = require('../serializers')

const app = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')

  switch (req.method) {
    case 'GET': {
      return res.write(
        serializers.message.encode({ id: 1, body: 'body:1' }),
        'binary',
        () => res.end()
      )
    }
    case 'POST': {
      const chunks = []

      req.on('data', chunk => chunks.push(chunk))
      req.on('end', () => {
        const buffer = Buffer.concat(chunks)
        const message = serializers.message.decode(buffer)

        return res.end(JSON.stringify(message))
      })
    }
  }
})

app.listen(8000)
