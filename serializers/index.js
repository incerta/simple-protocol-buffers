require('./proto/messages_pb.js')

module.exports = {
  message: {
    makeBinary: ({ id, body }) => {
      const message = new proto.Message()

      message.setId(id)
      message.setBody(body)

      return message.serializeBinary()
    },
    readBinary: (buffer) => proto.Message.deserializeBinary(buffer).toObject(),
  },
}
