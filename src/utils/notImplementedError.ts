export class TypeNotImplementedError extends Error {
    constructor(type: string, context: string) {
        super(`${type} is not implemented in context ${context}`);

        // Set the prototype explicitly.
        Object.setPrototypeOf(this, TypeNotImplementedError.prototype);
    }
}
