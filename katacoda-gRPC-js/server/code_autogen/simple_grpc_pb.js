// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var simple_pb = require('./simple_pb.js');

function serialize_simplegrpc_BlabberRequest(arg) {
  if (!(arg instanceof simple_pb.BlabberRequest)) {
    throw new Error('Expected argument of type simplegrpc.BlabberRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_simplegrpc_BlabberRequest(buffer_arg) {
  return simple_pb.BlabberRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_simplegrpc_BlabberResponse(arg) {
  if (!(arg instanceof simple_pb.BlabberResponse)) {
    throw new Error('Expected argument of type simplegrpc.BlabberResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_simplegrpc_BlabberResponse(buffer_arg) {
  return simple_pb.BlabberResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_simplegrpc_ChatterRequest(arg) {
  if (!(arg instanceof simple_pb.ChatterRequest)) {
    throw new Error('Expected argument of type simplegrpc.ChatterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_simplegrpc_ChatterRequest(buffer_arg) {
  return simple_pb.ChatterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_simplegrpc_ChatterResponse(arg) {
  if (!(arg instanceof simple_pb.ChatterResponse)) {
    throw new Error('Expected argument of type simplegrpc.ChatterResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_simplegrpc_ChatterResponse(buffer_arg) {
  return simple_pb.ChatterResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_simplegrpc_PingRequest(arg) {
  if (!(arg instanceof simple_pb.PingRequest)) {
    throw new Error('Expected argument of type simplegrpc.PingRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_simplegrpc_PingRequest(buffer_arg) {
  return simple_pb.PingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_simplegrpc_PingResponse(arg) {
  if (!(arg instanceof simple_pb.PingResponse)) {
    throw new Error('Expected argument of type simplegrpc.PingResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_simplegrpc_PingResponse(buffer_arg) {
  return simple_pb.PingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_simplegrpc_Request(arg) {
  if (!(arg instanceof simple_pb.Request)) {
    throw new Error('Expected argument of type simplegrpc.Request');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_simplegrpc_Request(buffer_arg) {
  return simple_pb.Request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_simplegrpc_Response(arg) {
  if (!(arg instanceof simple_pb.Response)) {
    throw new Error('Expected argument of type simplegrpc.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_simplegrpc_Response(buffer_arg) {
  return simple_pb.Response.deserializeBinary(new Uint8Array(buffer_arg));
}


var SimpleServiceService = exports.SimpleServiceService = {
  add: {
    path: '/simplegrpc.SimpleService/Add',
    requestStream: false,
    responseStream: false,
    requestType: simple_pb.Request,
    responseType: simple_pb.Response,
    requestSerialize: serialize_simplegrpc_Request,
    requestDeserialize: deserialize_simplegrpc_Request,
    responseSerialize: serialize_simplegrpc_Response,
    responseDeserialize: deserialize_simplegrpc_Response,
  },
  subtract: {
    path: '/simplegrpc.SimpleService/Subtract',
    requestStream: false,
    responseStream: false,
    requestType: simple_pb.Request,
    responseType: simple_pb.Response,
    requestSerialize: serialize_simplegrpc_Request,
    requestDeserialize: deserialize_simplegrpc_Request,
    responseSerialize: serialize_simplegrpc_Response,
    responseDeserialize: deserialize_simplegrpc_Response,
  },
  multiply: {
    path: '/simplegrpc.SimpleService/Multiply',
    requestStream: false,
    responseStream: false,
    requestType: simple_pb.Request,
    responseType: simple_pb.Response,
    requestSerialize: serialize_simplegrpc_Request,
    requestDeserialize: deserialize_simplegrpc_Request,
    responseSerialize: serialize_simplegrpc_Response,
    responseDeserialize: deserialize_simplegrpc_Response,
  },
  divide: {
    path: '/simplegrpc.SimpleService/Divide',
    requestStream: false,
    responseStream: false,
    requestType: simple_pb.Request,
    responseType: simple_pb.Response,
    requestSerialize: serialize_simplegrpc_Request,
    requestDeserialize: deserialize_simplegrpc_Request,
    responseSerialize: serialize_simplegrpc_Response,
    responseDeserialize: deserialize_simplegrpc_Response,
  },
  chatter: {
    path: '/simplegrpc.SimpleService/Chatter',
    requestStream: false,
    responseStream: true,
    requestType: simple_pb.ChatterRequest,
    responseType: simple_pb.ChatterResponse,
    requestSerialize: serialize_simplegrpc_ChatterRequest,
    requestDeserialize: deserialize_simplegrpc_ChatterRequest,
    responseSerialize: serialize_simplegrpc_ChatterResponse,
    responseDeserialize: deserialize_simplegrpc_ChatterResponse,
  },
  blabber: {
    path: '/simplegrpc.SimpleService/Blabber',
    requestStream: true,
    responseStream: true,
    requestType: simple_pb.BlabberRequest,
    responseType: simple_pb.BlabberResponse,
    requestSerialize: serialize_simplegrpc_BlabberRequest,
    requestDeserialize: deserialize_simplegrpc_BlabberRequest,
    responseSerialize: serialize_simplegrpc_BlabberResponse,
    responseDeserialize: deserialize_simplegrpc_BlabberResponse,
  },
  ping: {
    path: '/simplegrpc.SimpleService/Ping',
    requestStream: false,
    responseStream: false,
    requestType: simple_pb.PingRequest,
    responseType: simple_pb.PingResponse,
    requestSerialize: serialize_simplegrpc_PingRequest,
    requestDeserialize: deserialize_simplegrpc_PingRequest,
    responseSerialize: serialize_simplegrpc_PingResponse,
    responseDeserialize: deserialize_simplegrpc_PingResponse,
  },
};

exports.SimpleServiceClient = grpc.makeGenericClientConstructor(SimpleServiceService);
