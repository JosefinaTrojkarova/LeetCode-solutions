// Last updated: 4/28/2025, 10:17:22 PM
type Fn = (n: number, i: number) => any

function filter(arr: number[], fn: Fn): number[] {
    let newArr: number[] = []
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            newArr.push(arr[i])
        }
    }
    return newArr
};