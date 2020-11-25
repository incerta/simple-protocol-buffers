/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/minimal"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/minimal"));

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    $root.HelloRequest = (function() {
    
        /**
         * Properties of a HelloRequest.
         * @exports IHelloRequest
         * @interface IHelloRequest
         * @property {string|null} [name] HelloRequest name
         */
    
        /**
         * Constructs a new HelloRequest.
         * @exports HelloRequest
         * @classdesc Represents a HelloRequest.
         * @implements IHelloRequest
         * @constructor
         * @param {IHelloRequest=} [properties] Properties to set
         */
        function HelloRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * HelloRequest name.
         * @member {string} name
         * @memberof HelloRequest
         * @instance
         */
        HelloRequest.prototype.name = "";
    
        /**
         * Creates a new HelloRequest instance using the specified properties.
         * @function create
         * @memberof HelloRequest
         * @static
         * @param {IHelloRequest=} [properties] Properties to set
         * @returns {HelloRequest} HelloRequest instance
         */
        HelloRequest.create = function create(properties) {
            return new HelloRequest(properties);
        };
    
        /**
         * Encodes the specified HelloRequest message. Does not implicitly {@link HelloRequest.verify|verify} messages.
         * @function encode
         * @memberof HelloRequest
         * @static
         * @param {IHelloRequest} message HelloRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HelloRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            return writer;
        };
    
        /**
         * Encodes the specified HelloRequest message, length delimited. Does not implicitly {@link HelloRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof HelloRequest
         * @static
         * @param {IHelloRequest} message HelloRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HelloRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a HelloRequest message from the specified reader or buffer.
         * @function decode
         * @memberof HelloRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {HelloRequest} HelloRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HelloRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.HelloRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a HelloRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof HelloRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {HelloRequest} HelloRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HelloRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a HelloRequest message.
         * @function verify
         * @memberof HelloRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HelloRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };
    
        /**
         * Creates a HelloRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof HelloRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {HelloRequest} HelloRequest
         */
        HelloRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.HelloRequest)
                return object;
            var message = new $root.HelloRequest();
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };
    
        /**
         * Creates a plain object from a HelloRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof HelloRequest
         * @static
         * @param {HelloRequest} message HelloRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HelloRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.name = "";
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };
    
        /**
         * Converts this HelloRequest to JSON.
         * @function toJSON
         * @memberof HelloRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HelloRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return HelloRequest;
    })();
    
    $root.HelloReply = (function() {
    
        /**
         * Properties of a HelloReply.
         * @exports IHelloReply
         * @interface IHelloReply
         * @property {string|null} [message] HelloReply message
         */
    
        /**
         * Constructs a new HelloReply.
         * @exports HelloReply
         * @classdesc Represents a HelloReply.
         * @implements IHelloReply
         * @constructor
         * @param {IHelloReply=} [properties] Properties to set
         */
        function HelloReply(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * HelloReply message.
         * @member {string} message
         * @memberof HelloReply
         * @instance
         */
        HelloReply.prototype.message = "";
    
        /**
         * Creates a new HelloReply instance using the specified properties.
         * @function create
         * @memberof HelloReply
         * @static
         * @param {IHelloReply=} [properties] Properties to set
         * @returns {HelloReply} HelloReply instance
         */
        HelloReply.create = function create(properties) {
            return new HelloReply(properties);
        };
    
        /**
         * Encodes the specified HelloReply message. Does not implicitly {@link HelloReply.verify|verify} messages.
         * @function encode
         * @memberof HelloReply
         * @static
         * @param {IHelloReply} message HelloReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HelloReply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
            return writer;
        };
    
        /**
         * Encodes the specified HelloReply message, length delimited. Does not implicitly {@link HelloReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof HelloReply
         * @static
         * @param {IHelloReply} message HelloReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HelloReply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a HelloReply message from the specified reader or buffer.
         * @function decode
         * @memberof HelloReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {HelloReply} HelloReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HelloReply.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.HelloReply();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a HelloReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof HelloReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {HelloReply} HelloReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HelloReply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a HelloReply message.
         * @function verify
         * @memberof HelloReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HelloReply.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            return null;
        };
    
        /**
         * Creates a HelloReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof HelloReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {HelloReply} HelloReply
         */
        HelloReply.fromObject = function fromObject(object) {
            if (object instanceof $root.HelloReply)
                return object;
            var message = new $root.HelloReply();
            if (object.message != null)
                message.message = String(object.message);
            return message;
        };
    
        /**
         * Creates a plain object from a HelloReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof HelloReply
         * @static
         * @param {HelloReply} message HelloReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HelloReply.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.message = "";
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            return object;
        };
    
        /**
         * Converts this HelloReply to JSON.
         * @function toJSON
         * @memberof HelloReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HelloReply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return HelloReply;
    })();
    
    $root.Greeter = (function() {
    
        /**
         * Constructs a new Greeter service.
         * @exports Greeter
         * @classdesc Represents a Greeter
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Greeter(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }
    
        (Greeter.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Greeter;
    
        /**
         * Creates new Greeter service using the specified rpc implementation.
         * @function create
         * @memberof Greeter
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Greeter} RPC service. Useful where requests and/or responses are streamed.
         */
        Greeter.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };
    
        /**
         * Callback as used by {@link Greeter#sayHello}.
         * @memberof Greeter
         * @typedef SayHelloCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {HelloReply} [response] HelloReply
         */
    
        /**
         * Calls SayHello.
         * @function sayHello
         * @memberof Greeter
         * @instance
         * @param {IHelloRequest} request HelloRequest message or plain object
         * @param {Greeter.SayHelloCallback} callback Node-style callback called with the error, if any, and HelloReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Greeter.prototype.sayHello = function sayHello(request, callback) {
            return this.rpcCall(sayHello, $root.HelloRequest, $root.HelloReply, request, callback);
        }, "name", { value: "SayHello" });
    
        /**
         * Calls SayHello.
         * @function sayHello
         * @memberof Greeter
         * @instance
         * @param {IHelloRequest} request HelloRequest message or plain object
         * @returns {Promise<HelloReply>} Promise
         * @variation 2
         */
    
        return Greeter;
    })();
    
    $root.Message = (function() {
    
        /**
         * Properties of a Message.
         * @exports IMessage
         * @interface IMessage
         * @property {number|null} [id] Message id
         * @property {string|null} [body] Message body
         */
    
        /**
         * Constructs a new Message.
         * @exports Message
         * @classdesc Represents a Message.
         * @implements IMessage
         * @constructor
         * @param {IMessage=} [properties] Properties to set
         */
        function Message(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Message id.
         * @member {number} id
         * @memberof Message
         * @instance
         */
        Message.prototype.id = 0;
    
        /**
         * Message body.
         * @member {string} body
         * @memberof Message
         * @instance
         */
        Message.prototype.body = "";
    
        /**
         * Creates a new Message instance using the specified properties.
         * @function create
         * @memberof Message
         * @static
         * @param {IMessage=} [properties] Properties to set
         * @returns {Message} Message instance
         */
        Message.create = function create(properties) {
            return new Message(properties);
        };
    
        /**
         * Encodes the specified Message message. Does not implicitly {@link Message.verify|verify} messages.
         * @function encode
         * @memberof Message
         * @static
         * @param {IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.body != null && Object.hasOwnProperty.call(message, "body"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.body);
            return writer;
        };
    
        /**
         * Encodes the specified Message message, length delimited. Does not implicitly {@link Message.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Message
         * @static
         * @param {IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a Message message from the specified reader or buffer.
         * @function decode
         * @memberof Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Message();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                case 2:
                    message.body = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a Message message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a Message message.
         * @function verify
         * @memberof Message
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Message.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.body != null && message.hasOwnProperty("body"))
                if (!$util.isString(message.body))
                    return "body: string expected";
            return null;
        };
    
        /**
         * Creates a Message message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Message
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Message} Message
         */
        Message.fromObject = function fromObject(object) {
            if (object instanceof $root.Message)
                return object;
            var message = new $root.Message();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.body != null)
                message.body = String(object.body);
            return message;
        };
    
        /**
         * Creates a plain object from a Message message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Message
         * @static
         * @param {Message} message Message
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Message.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.body = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.body != null && message.hasOwnProperty("body"))
                object.body = message.body;
            return object;
        };
    
        /**
         * Converts this Message to JSON.
         * @function toJSON
         * @memberof Message
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Message.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return Message;
    })();

    return $root;
});
