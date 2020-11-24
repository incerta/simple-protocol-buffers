const serializers = require('../../serializers')

fetch('http://localhost:8000')
  .then((response) => response.arrayBuffer())
  .then((buffer) => new Uint8Array(buffer))
  .then((unit8Array) => serializers.message.decode(unit8Array))
  .then((message) => console.log('GET', message))

fetch('http://localhost:8000', {
  method: 'POST',
  body: serializers.message.encode({ id: 2, body: 'body:2' }),
})
  .then((response) => response.json())
  .then((message) => console.log('POST', message))
