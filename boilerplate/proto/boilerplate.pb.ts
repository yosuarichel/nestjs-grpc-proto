/* eslint-disable */
import * as Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "boilerplate";

/** protoc --plugin=./node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=. ./boilerplate/proto/boilerplate.proto */

export interface CreateBookRequest {
  Name: string;
  Description: string;
  Price: number;
  Author: string;
  Publisher: string;
}

export interface Response {
  Error: ErrorData | undefined;
  CreatedID: number;
}

export interface ErrorData {
  Status: number;
  Message: string;
}

function createBaseCreateBookRequest(): CreateBookRequest {
  return { Name: "", Description: "", Price: 0, Author: "", Publisher: "" };
}

export const CreateBookRequest = {
  encode(message: CreateBookRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Name !== "") {
      writer.uint32(10).string(message.Name);
    }
    if (message.Description !== "") {
      writer.uint32(18).string(message.Description);
    }
    if (message.Price !== 0) {
      writer.uint32(29).float(message.Price);
    }
    if (message.Author !== "") {
      writer.uint32(34).string(message.Author);
    }
    if (message.Publisher !== "") {
      writer.uint32(42).string(message.Publisher);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateBookRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateBookRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Name = reader.string();
          break;
        case 2:
          message.Description = reader.string();
          break;
        case 3:
          message.Price = reader.float();
          break;
        case 4:
          message.Author = reader.string();
          break;
        case 5:
          message.Publisher = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateBookRequest {
    return {
      Name: isSet(object.Name) ? String(object.Name) : "",
      Description: isSet(object.Description) ? String(object.Description) : "",
      Price: isSet(object.Price) ? Number(object.Price) : 0,
      Author: isSet(object.Author) ? String(object.Author) : "",
      Publisher: isSet(object.Publisher) ? String(object.Publisher) : "",
    };
  },

  toJSON(message: CreateBookRequest): unknown {
    const obj: any = {};
    message.Name !== undefined && (obj.Name = message.Name);
    message.Description !== undefined && (obj.Description = message.Description);
    message.Price !== undefined && (obj.Price = message.Price);
    message.Author !== undefined && (obj.Author = message.Author);
    message.Publisher !== undefined && (obj.Publisher = message.Publisher);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateBookRequest>, I>>(object: I): CreateBookRequest {
    const message = createBaseCreateBookRequest();
    message.Name = object.Name ?? "";
    message.Description = object.Description ?? "";
    message.Price = object.Price ?? 0;
    message.Author = object.Author ?? "";
    message.Publisher = object.Publisher ?? "";
    return message;
  },
};

function createBaseResponse(): Response {
  return { Error: undefined, CreatedID: 0 };
}

export const Response = {
  encode(message: Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Error !== undefined) {
      ErrorData.encode(message.Error, writer.uint32(10).fork()).ldelim();
    }
    if (message.CreatedID !== 0) {
      writer.uint32(16).int64(message.CreatedID);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Response {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Error = ErrorData.decode(reader, reader.uint32());
          break;
        case 2:
          message.CreatedID = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Response {
    return {
      Error: isSet(object.Error) ? ErrorData.fromJSON(object.Error) : undefined,
      CreatedID: isSet(object.CreatedID) ? Number(object.CreatedID) : 0,
    };
  },

  toJSON(message: Response): unknown {
    const obj: any = {};
    message.Error !== undefined && (obj.Error = message.Error ? ErrorData.toJSON(message.Error) : undefined);
    message.CreatedID !== undefined && (obj.CreatedID = Math.round(message.CreatedID));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Response>, I>>(object: I): Response {
    const message = createBaseResponse();
    message.Error = (object.Error !== undefined && object.Error !== null)
      ? ErrorData.fromPartial(object.Error)
      : undefined;
    message.CreatedID = object.CreatedID ?? 0;
    return message;
  },
};

function createBaseErrorData(): ErrorData {
  return { Status: 0, Message: "" };
}

export const ErrorData = {
  encode(message: ErrorData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Status !== 0) {
      writer.uint32(8).int32(message.Status);
    }
    if (message.Message !== "") {
      writer.uint32(18).string(message.Message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ErrorData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseErrorData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Status = reader.int32();
          break;
        case 2:
          message.Message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ErrorData {
    return {
      Status: isSet(object.Status) ? Number(object.Status) : 0,
      Message: isSet(object.Message) ? String(object.Message) : "",
    };
  },

  toJSON(message: ErrorData): unknown {
    const obj: any = {};
    message.Status !== undefined && (obj.Status = Math.round(message.Status));
    message.Message !== undefined && (obj.Message = message.Message);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ErrorData>, I>>(object: I): ErrorData {
    const message = createBaseErrorData();
    message.Status = object.Status ?? 0;
    message.Message = object.Message ?? "";
    return message;
  },
};

export interface AuthService {
  CreateBook(request: CreateBookRequest): Promise<Response>;
}

export class AuthServiceClientImpl implements AuthService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "boilerplate.AuthService";
    this.rpc = rpc;
    this.CreateBook = this.CreateBook.bind(this);
  }
  CreateBook(request: CreateBookRequest): Promise<Response> {
    const data = CreateBookRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateBook", data);
    return promise.then((data) => Response.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
