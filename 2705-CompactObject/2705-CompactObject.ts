// Last updated: 5/1/2025, 9:00:22 PM
type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function compactObject(obj: Obj): Obj {
    if (Array.isArray(obj)) {
        return obj.map((val) => {
            if (typeof val === "object" && val) return compactObject(val)
            return val
        }).filter(Boolean)
    } else {
        for (let [key, val] of Object.entries(obj)) {
            if (typeof val === "object" && val) obj[key] = compactObject(val)
            else if (!Boolean(val)) delete obj[key]
        }
    }
    return obj
};