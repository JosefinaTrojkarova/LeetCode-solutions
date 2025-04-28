// Last updated: 4/28/2025, 10:14:52 PM
type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
    let result = init
    nums.forEach((num) => result = fn(result, num))
    return result
};