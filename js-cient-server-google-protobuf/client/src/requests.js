const serializers = require('../../serializers')

fetch('http://localhost:8000/')
  .then(response => response.arrayBuffer())
  .then(buffer => serializers.message.readBinary(buffer))
  .then(x => console.log('GET', x))

fetch('http://localhost:8000/', {
  method: 'POST',
  body: serializers.message.makeBinary({ id: 2, body: 'body:2' }),
})
  .then(response => response.json())
  .then(x => console.log('POST', x))
