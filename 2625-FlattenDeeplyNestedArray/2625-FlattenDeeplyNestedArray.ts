// Last updated: 5/1/2025, 8:26:13 PM
type MultiDimensionalArray = (number | MultiDimensionalArray)[];

var flat = function (arr:  MultiDimensionalArray, n: number, res = []):  MultiDimensionalArray {
    for(let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i]) && n)
            flat(arr[i] as MultiDimensionalArray, n - 1, res);
        else
            res.push(arr[i]);
    }

    return res;
};