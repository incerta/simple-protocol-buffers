const { Message } = require('./serializers')

module.exports = {
  message: {
    encode: ({ id, body }) => {
      const message = Message.create({ id, body })
      return Message.encode(message).finish()
    },
    decode: (buffer) => Message.decode(buffer)
  },
}
