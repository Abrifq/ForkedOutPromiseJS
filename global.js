//jshint -W098
/**@module ForkedOutPromise:globalDoc
 * @author fbarda arda.aydin@operationsilkscarf.com
 */

/**@typedef {Object} ForkedOutPromiseInstance - An object containing a promise and the promise's resolve and reject functions.
 * @prop {Promise<*>} promise - Designed to return via a callback-style async function. Use `this.resolve` and `this.reject` to control the promise via a callback.
 * @prop {(value:*=)=>void} resolve Makes the [promise]{@link ForkedOutPromiseInstance#promise} resolve with the given argument.
 * @prop {(reason:*=)=>void} reject Makes the [promise]{@link ForkedOutPromiseInstance#promise} reject with the given error argument.
*/
/** @class */
class ForkedOutPromise {
    /** @returns {ForkedOutPromiseInstance} A new {@linkplain ForkedOutPromise} object. */
    constructor() {
        this.promise = new Promise(
            (resolve, reject) => {
                this.resolve = resolve;
                this.reject = reject;
            }
        );
    }
}