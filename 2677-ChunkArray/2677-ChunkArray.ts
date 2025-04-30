// Last updated: 4/30/2025, 6:39:14 PM
type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function chunk(arr: Obj[], size: number): Obj[][] {
    const result: Obj[][] = []
    let chunk: Obj[] = []

    arr.forEach((item, index) => {
        chunk.push(item)
        if ((index + 1) % size === 0) {
            result.push(chunk)
            chunk = []
        } else if (arr.length === index + 1) {
            result.push(chunk)
        }
    })
    
    return result
};
