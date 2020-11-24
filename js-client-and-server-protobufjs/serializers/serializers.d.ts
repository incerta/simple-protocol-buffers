import * as $protobuf from "protobufjs";
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
