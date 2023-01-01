"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoilerplateServiceClientImpl = exports.ErrorData = exports.Response = exports.Book = exports.BookListResponse = exports.BookListRequestFilter = exports.BookListRequest = exports.CreateBookRequest = exports.protobufPackage = void 0;
const Long = require("long");
const _m0 = require("protobufjs/minimal");
exports.protobufPackage = "boilerplate";
function createBaseCreateBookRequest() {
    return { Name: "", Description: "", Price: 0, Author: "", Publisher: "" };
}
exports.CreateBookRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
        return {
            Name: isSet(object.Name) ? String(object.Name) : "",
            Description: isSet(object.Description) ? String(object.Description) : "",
            Price: isSet(object.Price) ? Number(object.Price) : 0,
            Author: isSet(object.Author) ? String(object.Author) : "",
            Publisher: isSet(object.Publisher) ? String(object.Publisher) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.Name !== undefined && (obj.Name = message.Name);
        message.Description !== undefined && (obj.Description = message.Description);
        message.Price !== undefined && (obj.Price = message.Price);
        message.Author !== undefined && (obj.Author = message.Author);
        message.Publisher !== undefined && (obj.Publisher = message.Publisher);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseCreateBookRequest();
        message.Name = (_a = object.Name) !== null && _a !== void 0 ? _a : "";
        message.Description = (_b = object.Description) !== null && _b !== void 0 ? _b : "";
        message.Price = (_c = object.Price) !== null && _c !== void 0 ? _c : 0;
        message.Author = (_d = object.Author) !== null && _d !== void 0 ? _d : "";
        message.Publisher = (_e = object.Publisher) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
function createBaseBookListRequest() {
    return { Filter: undefined };
}
exports.BookListRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.Filter !== undefined) {
            exports.BookListRequestFilter.encode(message.Filter, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBookListRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Filter = exports.BookListRequestFilter.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { Filter: isSet(object.Filter) ? exports.BookListRequestFilter.fromJSON(object.Filter) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.Filter !== undefined &&
            (obj.Filter = message.Filter ? exports.BookListRequestFilter.toJSON(message.Filter) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseBookListRequest();
        message.Filter = (object.Filter !== undefined && object.Filter !== null)
            ? exports.BookListRequestFilter.fromPartial(object.Filter)
            : undefined;
        return message;
    },
};
function createBaseBookListRequestFilter() {
    return { Name: "" };
}
exports.BookListRequestFilter = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.Name !== "") {
            writer.uint32(10).string(message.Name);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return { Name: isSet(object.Name) ? String(object.Name) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.Name !== undefined && (obj.Name = message.Name);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseBookListRequestFilter();
        message.Name = (_a = object.Name) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseBookListResponse() {
    return { Error: undefined, Data: [] };
}
exports.BookListResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.Error !== undefined) {
            exports.ErrorData.encode(message.Error, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.Data) {
            exports.Book.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBookListResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Error = exports.ErrorData.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.Data.push(exports.Book.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            Error: isSet(object.Error) ? exports.ErrorData.fromJSON(object.Error) : undefined,
            Data: Array.isArray(object === null || object === void 0 ? void 0 : object.Data) ? object.Data.map((e) => exports.Book.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.Error !== undefined && (obj.Error = message.Error ? exports.ErrorData.toJSON(message.Error) : undefined);
        if (message.Data) {
            obj.Data = message.Data.map((e) => e ? exports.Book.toJSON(e) : undefined);
        }
        else {
            obj.Data = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseBookListResponse();
        message.Error = (object.Error !== undefined && object.Error !== null)
            ? exports.ErrorData.fromPartial(object.Error)
            : undefined;
        message.Data = ((_a = object.Data) === null || _a === void 0 ? void 0 : _a.map((e) => exports.Book.fromPartial(e))) || [];
        return message;
    },
};
function createBaseBook() {
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
exports.Book = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBook();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ID = longToNumber(reader.int64());
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
                    message.CreatedBy = longToNumber(reader.int64());
                    break;
                case 9:
                    message.UpdatedAt = reader.string();
                    break;
                case 10:
                    message.UpdatedBy = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
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
    toJSON(message) {
        const obj = {};
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
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        const message = createBaseBook();
        message.ID = (_a = object.ID) !== null && _a !== void 0 ? _a : 0;
        message.Name = (_b = object.Name) !== null && _b !== void 0 ? _b : "";
        message.Description = (_c = object.Description) !== null && _c !== void 0 ? _c : "";
        message.Price = (_d = object.Price) !== null && _d !== void 0 ? _d : 0;
        message.Author = (_e = object.Author) !== null && _e !== void 0 ? _e : "";
        message.Publisher = (_f = object.Publisher) !== null && _f !== void 0 ? _f : "";
        message.CreatedAt = (_g = object.CreatedAt) !== null && _g !== void 0 ? _g : "";
        message.CreatedBy = (_h = object.CreatedBy) !== null && _h !== void 0 ? _h : 0;
        message.UpdatedAt = (_j = object.UpdatedAt) !== null && _j !== void 0 ? _j : "";
        message.UpdatedBy = (_k = object.UpdatedBy) !== null && _k !== void 0 ? _k : 0;
        return message;
    },
};
function createBaseResponse() {
    return { Error: undefined, CreatedID: 0 };
}
exports.Response = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.Error !== undefined) {
            exports.ErrorData.encode(message.Error, writer.uint32(10).fork()).ldelim();
        }
        if (message.CreatedID !== 0) {
            writer.uint32(16).int64(message.CreatedID);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Error = exports.ErrorData.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.CreatedID = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            Error: isSet(object.Error) ? exports.ErrorData.fromJSON(object.Error) : undefined,
            CreatedID: isSet(object.CreatedID) ? Number(object.CreatedID) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.Error !== undefined && (obj.Error = message.Error ? exports.ErrorData.toJSON(message.Error) : undefined);
        message.CreatedID !== undefined && (obj.CreatedID = Math.round(message.CreatedID));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseResponse();
        message.Error = (object.Error !== undefined && object.Error !== null)
            ? exports.ErrorData.fromPartial(object.Error)
            : undefined;
        message.CreatedID = (_a = object.CreatedID) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseErrorData() {
    return { Status: 0, Message: "" };
}
exports.ErrorData = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.Status !== 0) {
            writer.uint32(8).int32(message.Status);
        }
        if (message.Message !== "") {
            writer.uint32(18).string(message.Message);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            Status: isSet(object.Status) ? Number(object.Status) : 0,
            Message: isSet(object.Message) ? String(object.Message) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.Status !== undefined && (obj.Status = Math.round(message.Status));
        message.Message !== undefined && (obj.Message = message.Message);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseErrorData();
        message.Status = (_a = object.Status) !== null && _a !== void 0 ? _a : 0;
        message.Message = (_b = object.Message) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
class BoilerplateServiceClientImpl {
    constructor(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || "boilerplate.BoilerplateService";
        this.rpc = rpc;
        this.CreateBook = this.CreateBook.bind(this);
        this.BookList = this.BookList.bind(this);
    }
    CreateBook(request) {
        const data = exports.CreateBookRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "CreateBook", data);
        return promise.then((data) => exports.Response.decode(new _m0.Reader(data)));
    }
    BookList(request) {
        const data = exports.BookListRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "BookList", data);
        return promise.then((data) => exports.BookListResponse.decode(new _m0.Reader(data)));
    }
}
exports.BoilerplateServiceClientImpl = BoilerplateServiceClientImpl;
var tsProtoGlobalThis = (() => {
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
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=boilerplate.pb.js.map