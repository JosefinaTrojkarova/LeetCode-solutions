// Last updated: 5/1/2025, 8:05:11 PM
type MultiDimensionalArray = (number | MultiDimensionalArray)[];

var flat = function (arr:  MultiDimensionalArray, n: number):  MultiDimensionalArray {
    let result = arr
    for (let i = 1; i <= n; i++) {
        const nextResult = []
        result.forEach((val) => {
            if (Array.isArray(val)) {
                val.forEach((v) => nextResult.push(v))
            } else nextResult.push(val)
        })
        result = nextResult
    }
    return result
};