module.exports = exports = class ForkedOutPromise {
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