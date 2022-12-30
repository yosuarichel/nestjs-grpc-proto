"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoilerplateClientImpl = exports.ErrorData = exports.Response = exports.CreateBookRequest = exports.protobufPackage = void 0;
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
class BoilerplateClientImpl {
    constructor(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || "boilerplate.Boilerplate";
        this.rpc = rpc;
        this.CreateBook = this.CreateBook.bind(this);
    }
    CreateBook(request) {
        const data = exports.CreateBookRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "CreateBook", data);
        return promise.then((data) => exports.Response.decode(new _m0.Reader(data)));
    }
}
exports.BoilerplateClientImpl = BoilerplateClientImpl;
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