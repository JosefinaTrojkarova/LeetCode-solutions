// Last updated: 4/30/2025, 6:15:34 PM
type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | JSONValue[]

function isEmpty(obj: Obj): boolean {
    return JSON.stringify(obj).length === 2
};