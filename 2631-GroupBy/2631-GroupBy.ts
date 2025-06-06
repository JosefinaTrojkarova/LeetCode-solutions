// Last updated: 4/30/2025, 9:21:04 PM
interface Array<T> {
    groupBy(fn: (item: T) => string): Record<string, T[]>
}


Array.prototype.groupBy = function(fn) {
    const result: Record<string, any[]> = {}

    this.forEach((item) => {
        const key = fn(item);
        (result[key] ||= []).push(item)
    })

    return result
}

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */