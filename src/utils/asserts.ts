export function assertsString(x: unknown, message?: string): asserts x is string {
    if (!(typeof x === 'string')) {
        throw new Error(message ?? 'Values is no string');
    }
}
