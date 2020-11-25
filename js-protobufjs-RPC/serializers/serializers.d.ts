import * as $protobuf from "protobufjs";
export interface IHelloRequest {
    name?: (string|null);
}

export class HelloRequest implements IHelloRequest {
    constructor(properties?: IHelloRequest);
    public name: string;
    public static create(properties?: IHelloRequest): HelloRequest;
    public static encode(message: IHelloRequest, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IHelloRequest, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): HelloRequest;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): HelloRequest;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): HelloRequest;
    public static toObject(message: HelloRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IHelloReply {
    message?: (string|null);
}

export class HelloReply implements IHelloReply {
    constructor(properties?: IHelloReply);
    public message: string;
    public static create(properties?: IHelloReply): HelloReply;
    public static encode(message: IHelloReply, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IHelloReply, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): HelloReply;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): HelloReply;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): HelloReply;
    public static toObject(message: HelloReply, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export class Greeter extends $protobuf.rpc.Service {
    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);
    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Greeter;
    public sayHello(request: IHelloRequest, callback: Greeter.SayHelloCallback): void;
    public sayHello(request: IHelloRequest): Promise<HelloReply>;
}

export namespace Greeter {

    type SayHelloCallback = (error: (Error|null), response?: HelloReply) => void;
}

export interface IMessage {
    id?: (number|null);
    body?: (string|null);
}

export class Message implements IMessage {
    constructor(properties?: IMessage);
    public id: number;
    public body: string;
    public static create(properties?: IMessage): Message;
    public static encode(message: IMessage, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IMessage, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Message;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Message;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): Message;
    public static toObject(message: Message, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}
