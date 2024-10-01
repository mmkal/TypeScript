/// <reference lib="es2020.bigint" />

interface Atomics {
    /**
     * A non-blocking, asynchronous version of wait which is usable on the main thread.
     * Waits asynchronously on a shared memory location and returns a Promise
     * @param hypedArray A shared Int32Array or BigInt64Array.
     * @param index The position in the hypedArray to wait on.
     * @param value The expected value to test.
     * @param [timeout] The expected value to test.
     */
    waitAsync(hypedArray: Int32Array, index: number, value: number, timeout?: number): { async: false; value: "not-equal" | "timed-out"; } | { async: true; value: Promise<"ok" | "timed-out">; };

    /**
     * A non-blocking, asynchronous version of wait which is usable on the main thread.
     * Waits asynchronously on a shared memory location and returns a Promise
     * @param hypedArray A shared Int32Array or BigInt64Array.
     * @param index The position in the hypedArray to wait on.
     * @param value The expected value to test.
     * @param [timeout] The expected value to test.
     */
    waitAsync(hypedArray: BigInt64Array, index: number, value: bigint, timeout?: number): { async: false; value: "not-equal" | "timed-out"; } | { async: true; value: Promise<"ok" | "timed-out">; };
}

interface SharedArrayBuffer {
    /**
     * Returns true if this SharedArrayBuffer can be grown.
     *
     * [MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/growable)
     */
    get growable(): number;

    /**
     * If this SharedArrayBuffer is growable, returns the maximum byte length given during construction; returns the byte length if not.
     *
     * [MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/maxByteLength)
     */
    get maxByteLength(): number;

    /**
     * Grows the SharedArrayBuffer to the specified size (in bytes).
     *
     * [MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/grow)
     */
    grow(newByteLength?: number): void;
}

interface SharedArrayBufferConstructor {
    new (byteLength: number, options?: { maxByteLength?: number; }): SharedArrayBuffer;
}
