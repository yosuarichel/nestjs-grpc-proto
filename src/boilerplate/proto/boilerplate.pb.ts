/* eslint-disable */
import * as Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "boilerplate";

/** protoc --plugin=./node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=. --ts_proto_opt=fileSuffix=.pb ./src/boilerplate/proto/boilerplate.proto */

export interface CreateBookRequest {
  Name: string;
  Description: string;
  Price: number;
  Author: string;
  Publisher: string;
}

export interface BookListRequest {
  Filter: BookListRequestFilter | undefined;
}

export interface BookListRequestFilter {
  Name: string;
}

export interface BookListResponse {
  Error: ErrorData | undefined;
  Data: Book[];
}

export interface Book {
  ID: number;
  Name: string;
  Description: string;
  Price: number;
  Author: string;
  Publisher: string;
  CreatedAt: string;
  CreatedBy: number;
  UpdatedAt: string;
  UpdatedBy: number;
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

function createBaseBookListRequest(): BookListRequest {
  return { Filter: undefined };
}

export const BookListRequest = {
  encode(message: BookListRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Filter !== undefined) {
      BookListRequestFilter.encode(message.Filter, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BookListRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBookListRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Filter = BookListRequestFilter.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BookListRequest {
    return { Filter: isSet(object.Filter) ? BookListRequestFilter.fromJSON(object.Filter) : undefined };
  },

  toJSON(message: BookListRequest): unknown {
    const obj: any = {};
    message.Filter !== undefined &&
      (obj.Filter = message.Filter ? BookListRequestFilter.toJSON(message.Filter) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BookListRequest>, I>>(object: I): BookListRequest {
    const message = createBaseBookListRequest();
    message.Filter = (object.Filter !== undefined && object.Filter !== null)
      ? BookListRequestFilter.fromPartial(object.Filter)
      : undefined;
    return message;
  },
};

function createBaseBookListRequestFilter(): BookListRequestFilter {
  return { Name: "" };
}

export const BookListRequestFilter = {
  encode(message: BookListRequestFilter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Name !== "") {
      writer.uint32(10).string(message.Name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BookListRequestFilter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBookListRequestFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BookListRequestFilter {
    return { Name: isSet(object.Name) ? String(object.Name) : "" };
  },

  toJSON(message: BookListRequestFilter): unknown {
    const obj: any = {};
    message.Name !== undefined && (obj.Name = message.Name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BookListRequestFilter>, I>>(object: I): BookListRequestFilter {
    const message = createBaseBookListRequestFilter();
    message.Name = object.Name ?? "";
    return message;
  },
};

function createBaseBookListResponse(): BookListResponse {
  return { Error: undefined, Data: [] };
}

export const BookListResponse = {
  encode(message: BookListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Error !== undefined) {
      ErrorData.encode(message.Error, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.Data) {
      Book.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BookListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBookListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Error = ErrorData.decode(reader, reader.uint32());
          break;
        case 2:
          message.Data.push(Book.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BookListResponse {
    return {
      Error: isSet(object.Error) ? ErrorData.fromJSON(object.Error) : undefined,
      Data: Array.isArray(object?.Data) ? object.Data.map((e: any) => Book.fromJSON(e)) : [],
    };
  },

  toJSON(message: BookListResponse): unknown {
    const obj: any = {};
    message.Error !== undefined && (obj.Error = message.Error ? ErrorData.toJSON(message.Error) : undefined);
    if (message.Data) {
      obj.Data = message.Data.map((e) => e ? Book.toJSON(e) : undefined);
    } else {
      obj.Data = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BookListResponse>, I>>(object: I): BookListResponse {
    const message = createBaseBookListResponse();
    message.Error = (object.Error !== undefined && object.Error !== null)
      ? ErrorData.fromPartial(object.Error)
      : undefined;
    message.Data = object.Data?.map((e) => Book.fromPartial(e)) || [];
    return message;
  },
};

function createBaseBook(): Book {
  return {
    ID: 0,
    Name: "",
    Description: "",
    Price: 0,
    Author: "",
    Publisher: "",
    CreatedAt: "",
    CreatedBy: 0,
    UpdatedAt: "",
    UpdatedBy: 0,
  };
}

export const Book = {
  encode(message: Book, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ID !== 0) {
      writer.uint32(8).int64(message.ID);
    }
    if (message.Name !== "") {
      writer.uint32(18).string(message.Name);
    }
    if (message.Description !== "") {
      writer.uint32(26).string(message.Description);
    }
    if (message.Price !== 0) {
      writer.uint32(37).float(message.Price);
    }
    if (message.Author !== "") {
      writer.uint32(42).string(message.Author);
    }
    if (message.Publisher !== "") {
      writer.uint32(50).string(message.Publisher);
    }
    if (message.CreatedAt !== "") {
      writer.uint32(58).string(message.CreatedAt);
    }
    if (message.CreatedBy !== 0) {
      writer.uint32(64).int64(message.CreatedBy);
    }
    if (message.UpdatedAt !== "") {
      writer.uint32(74).string(message.UpdatedAt);
    }
    if (message.UpdatedBy !== 0) {
      writer.uint32(80).int64(message.UpdatedBy);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Book {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBook();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ID = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.Name = reader.string();
          break;
        case 3:
          message.Description = reader.string();
          break;
        case 4:
          message.Price = reader.float();
          break;
        case 5:
          message.Author = reader.string();
          break;
        case 6:
          message.Publisher = reader.string();
          break;
        case 7:
          message.CreatedAt = reader.string();
          break;
        case 8:
          message.CreatedBy = longToNumber(reader.int64() as Long);
          break;
        case 9:
          message.UpdatedAt = reader.string();
          break;
        case 10:
          message.UpdatedBy = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Book {
    return {
      ID: isSet(object.ID) ? Number(object.ID) : 0,
      Name: isSet(object.Name) ? String(object.Name) : "",
      Description: isSet(object.Description) ? String(object.Description) : "",
      Price: isSet(object.Price) ? Number(object.Price) : 0,
      Author: isSet(object.Author) ? String(object.Author) : "",
      Publisher: isSet(object.Publisher) ? String(object.Publisher) : "",
      CreatedAt: isSet(object.CreatedAt) ? String(object.CreatedAt) : "",
      CreatedBy: isSet(object.CreatedBy) ? Number(object.CreatedBy) : 0,
      UpdatedAt: isSet(object.UpdatedAt) ? String(object.UpdatedAt) : "",
      UpdatedBy: isSet(object.UpdatedBy) ? Number(object.UpdatedBy) : 0,
    };
  },

  toJSON(message: Book): unknown {
    const obj: any = {};
    message.ID !== undefined && (obj.ID = Math.round(message.ID));
    message.Name !== undefined && (obj.Name = message.Name);
    message.Description !== undefined && (obj.Description = message.Description);
    message.Price !== undefined && (obj.Price = message.Price);
    message.Author !== undefined && (obj.Author = message.Author);
    message.Publisher !== undefined && (obj.Publisher = message.Publisher);
    message.CreatedAt !== undefined && (obj.CreatedAt = message.CreatedAt);
    message.CreatedBy !== undefined && (obj.CreatedBy = Math.round(message.CreatedBy));
    message.UpdatedAt !== undefined && (obj.UpdatedAt = message.UpdatedAt);
    message.UpdatedBy !== undefined && (obj.UpdatedBy = Math.round(message.UpdatedBy));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Book>, I>>(object: I): Book {
    const message = createBaseBook();
    message.ID = object.ID ?? 0;
    message.Name = object.Name ?? "";
    message.Description = object.Description ?? "";
    message.Price = object.Price ?? 0;
    message.Author = object.Author ?? "";
    message.Publisher = object.Publisher ?? "";
    message.CreatedAt = object.CreatedAt ?? "";
    message.CreatedBy = object.CreatedBy ?? 0;
    message.UpdatedAt = object.UpdatedAt ?? "";
    message.UpdatedBy = object.UpdatedBy ?? 0;
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

export interface BoilerplateService {
  CreateBook(request: CreateBookRequest): Promise<Response>;
  BookList(request: BookListRequest): Promise<BookListResponse>;
}

export class BoilerplateServiceClientImpl implements BoilerplateService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "boilerplate.BoilerplateService";
    this.rpc = rpc;
    this.CreateBook = this.CreateBook.bind(this);
    this.BookList = this.BookList.bind(this);
  }
  CreateBook(request: CreateBookRequest): Promise<Response> {
    const data = CreateBookRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateBook", data);
    return promise.then((data) => Response.decode(new _m0.Reader(data)));
  }

  BookList(request: BookListRequest): Promise<BookListResponse> {
    const data = BookListRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "BookList", data);
    return promise.then((data) => BookListResponse.decode(new _m0.Reader(data)));
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
