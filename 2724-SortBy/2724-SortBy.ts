// Last updated: 4/30/2025, 9:44:55 PM
type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Fn = (value: JSONValue) => number

function sortBy(arr: JSONValue[], fn: Fn): JSONValue[] {
    return arr
        .map((val) => ({ val, sortKey: fn(val) }))
        .sort((a, b) => a.sortKey - b.sortKey)
        .map((val) => val.val)
};