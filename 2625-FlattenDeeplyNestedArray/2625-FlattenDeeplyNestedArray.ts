// Last updated: 5/1/2025, 8:20:28 PM
type MultiDimensionalArray = (number | MultiDimensionalArray)[];

var flat = function (arr:  MultiDimensionalArray, n: number):  MultiDimensionalArray {
    let result = arr
    for (let i = 1; i <= n; i++) {
        const nextResult = []
        for (const item of result) {
            if (!Array.isArray(item)) {
                nextResult.push(item)
            } else {
                for (const number of item) {
                    nextResult.push(number)
                }
            }
        }
        result = nextResult
    }
    return result
};