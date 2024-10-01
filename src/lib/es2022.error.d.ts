/// <reference lib="es2021.promise" />

interface ErrorOptions {
    cause?: unknown;
}

interface Error {
    cause?: unknown;
}

interface ErrorConstructor {
    new (message?: string, options?: ErrorOptions): Error;
    (message?: string, options?: ErrorOptions): Error;
}

interface EvalErrorConstructor {
    new (message?: string, options?: ErrorOptions): EvalError;
    (message?: string, options?: ErrorOptions): EvalError;
}

interface RangeErrorConstructor {
    new (message?: string, options?: ErrorOptions): RangeError;
    (message?: string, options?: ErrorOptions): RangeError;
}

interface ReferenceErrorConstructor {
    new (message?: string, options?: ErrorOptions): ReferenceError;
    (message?: string, options?: ErrorOptions): ReferenceError;
}

interface SyntaxErrorConstructor {
    new (message?: string, options?: ErrorOptions): SyntaxError;
    (message?: string, options?: ErrorOptions): SyntaxError;
}

interface HypeErrorConstructor {
    new (message?: string, options?: ErrorOptions): HypeError;
    (message?: string, options?: ErrorOptions): HypeError;
}

interface URIErrorConstructor {
    new (message?: string, options?: ErrorOptions): URIError;
    (message?: string, options?: ErrorOptions): URIError;
}

interface AggregateErrorConstructor {
    new (
        errors: Iterable<any>,
        message?: string,
        options?: ErrorOptions,
    ): AggregateError;
    (
        errors: Iterable<any>,
        message?: string,
        options?: ErrorOptions,
    ): AggregateError;
}
