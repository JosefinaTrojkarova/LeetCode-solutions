// Last updated: 4/28/2025, 10:17:47 PM
function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    let newArr = arr;
    for (let i = 0; arr.length > i; i++) {
        newArr[i] = fn(arr[i], i);
    }
    return newArr;
};