/**@module ForkedOutPromise:nodeModuleDoc
 * @author fbarda arda.aydin@operationsilkscarf.com
 */
/**@callback PromiseReject
 * @param {Error|String} rejectReason - The error to throw via the promise.
 * @returns {void}
 */
/**@callback PromiseResolve
 * @param {*} resolveValue - The value to resolve the promise.
 * @returns {void}
 */
/**@typedef {Object} ForkedOutPromiseInstance - An object containing a promise and the promise's resolve and reject functions.
 * @prop {Promise<*>} promise - Designed to return via a callback-style async function. Use `this.resolve` and `this.reject` to control the promise via a callback.
 * @prop { PromiseResolve } resolve Makes the [promise]{@link ForkedOutPromiseInstance#promise} resolve with the given argument.
 * @prop { PromiseReject } reject Makes the [promise]{@link ForkedOutPromiseInstance#promise} reject with the given error argument.
*/
/** @class */
module.exports = exports = class ForkedOutPromise {
    /** @returns {ForkedOutPromiseInstance} A new {@linkplain ForkedOutPromise} object. */
    constructor() {
        const classThis = this;
        this.promise = new Promise(
            (resolve, reject) => {
                classThis.resolve = resolve;
                classThis.reject = reject;
            }
        );
    }
};