// Last updated: 4/29/2025, 7:30:10 AM
type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

function argumentsLength(...args: JSONValue[]): number {
    return arguments.length
};

/**
 * argumentsLength(1, 2, 3); // 3
 */