import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "boilerplate";
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
export declare const CreateBookRequest: {
    encode(message: CreateBookRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateBookRequest;
    fromJSON(object: any): CreateBookRequest;
    toJSON(message: CreateBookRequest): unknown;
    fromPartial<I extends {
        Name?: string;
        Description?: string;
        Price?: number;
        Author?: string;
        Publisher?: string;
    } & {
        Name?: string;
        Description?: string;
        Price?: number;
        Author?: string;
        Publisher?: string;
    } & { [K in Exclude<keyof I, keyof CreateBookRequest>]: never; }>(object: I): CreateBookRequest;
};
export declare const BookListRequest: {
    encode(message: BookListRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BookListRequest;
    fromJSON(object: any): BookListRequest;
    toJSON(message: BookListRequest): unknown;
    fromPartial<I extends {
        Filter?: {
            Name?: string;
        };
    } & {
        Filter?: {
            Name?: string;
        } & {
            Name?: string;
        } & { [K in Exclude<keyof I["Filter"], "Name">]: never; };
    } & { [K_1 in Exclude<keyof I, "Filter">]: never; }>(object: I): BookListRequest;
};
export declare const BookListRequestFilter: {
    encode(message: BookListRequestFilter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BookListRequestFilter;
    fromJSON(object: any): BookListRequestFilter;
    toJSON(message: BookListRequestFilter): unknown;
    fromPartial<I extends {
        Name?: string;
    } & {
        Name?: string;
    } & { [K in Exclude<keyof I, "Name">]: never; }>(object: I): BookListRequestFilter;
};
export declare const BookListResponse: {
    encode(message: BookListResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BookListResponse;
    fromJSON(object: any): BookListResponse;
    toJSON(message: BookListResponse): unknown;
    fromPartial<I extends {
        Error?: {
            Status?: number;
            Message?: string;
        };
        Data?: {
            ID?: number;
            Name?: string;
            Description?: string;
            Price?: number;
            Author?: string;
            Publisher?: string;
            CreatedAt?: string;
            CreatedBy?: number;
            UpdatedAt?: string;
            UpdatedBy?: number;
        }[];
    } & {
        Error?: {
            Status?: number;
            Message?: string;
        } & {
            Status?: number;
            Message?: string;
        } & { [K in Exclude<keyof I["Error"], keyof ErrorData>]: never; };
        Data?: {
            ID?: number;
            Name?: string;
            Description?: string;
            Price?: number;
            Author?: string;
            Publisher?: string;
            CreatedAt?: string;
            CreatedBy?: number;
            UpdatedAt?: string;
            UpdatedBy?: number;
        }[] & ({
            ID?: number;
            Name?: string;
            Description?: string;
            Price?: number;
            Author?: string;
            Publisher?: string;
            CreatedAt?: string;
            CreatedBy?: number;
            UpdatedAt?: string;
            UpdatedBy?: number;
        } & {
            ID?: number;
            Name?: string;
            Description?: string;
            Price?: number;
            Author?: string;
            Publisher?: string;
            CreatedAt?: string;
            CreatedBy?: number;
            UpdatedAt?: string;
            UpdatedBy?: number;
        } & { [K_1 in Exclude<keyof I["Data"][number], keyof Book>]: never; })[] & { [K_2 in Exclude<keyof I["Data"], keyof {
            ID?: number;
            Name?: string;
            Description?: string;
            Price?: number;
            Author?: string;
            Publisher?: string;
            CreatedAt?: string;
            CreatedBy?: number;
            UpdatedAt?: string;
            UpdatedBy?: number;
        }[]>]: never; };
    } & { [K_3 in Exclude<keyof I, keyof BookListResponse>]: never; }>(object: I): BookListResponse;
};
export declare const Book: {
    encode(message: Book, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Book;
    fromJSON(object: any): Book;
    toJSON(message: Book): unknown;
    fromPartial<I extends {
        ID?: number;
        Name?: string;
        Description?: string;
        Price?: number;
        Author?: string;
        Publisher?: string;
        CreatedAt?: string;
        CreatedBy?: number;
        UpdatedAt?: string;
        UpdatedBy?: number;
    } & {
        ID?: number;
        Name?: string;
        Description?: string;
        Price?: number;
        Author?: string;
        Publisher?: string;
        CreatedAt?: string;
        CreatedBy?: number;
        UpdatedAt?: string;
        UpdatedBy?: number;
    } & { [K in Exclude<keyof I, keyof Book>]: never; }>(object: I): Book;
};
export declare const Response: {
    encode(message: Response, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Response;
    fromJSON(object: any): Response;
    toJSON(message: Response): unknown;
    fromPartial<I extends {
        Error?: {
            Status?: number;
            Message?: string;
        };
        CreatedID?: number;
    } & {
        Error?: {
            Status?: number;
            Message?: string;
        } & {
            Status?: number;
            Message?: string;
        } & { [K in Exclude<keyof I["Error"], keyof ErrorData>]: never; };
        CreatedID?: number;
    } & { [K_1 in Exclude<keyof I, keyof Response>]: never; }>(object: I): Response;
};
export declare const ErrorData: {
    encode(message: ErrorData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ErrorData;
    fromJSON(object: any): ErrorData;
    toJSON(message: ErrorData): unknown;
    fromPartial<I extends {
        Status?: number;
        Message?: string;
    } & {
        Status?: number;
        Message?: string;
    } & { [K in Exclude<keyof I, keyof ErrorData>]: never; }>(object: I): ErrorData;
};
export interface BoilerplateService {
    CreateBook(request: CreateBookRequest): Promise<Response>;
    BookList(request: BookListRequest): Promise<BookListResponse>;
}
export declare class BoilerplateServiceClientImpl implements BoilerplateService {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    CreateBook(request: CreateBookRequest): Promise<Response>;
    BookList(request: BookListRequest): Promise<BookListResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
