// Last updated: 4/29/2025, 7:26:59 AM
type F = (x: number) => number;

function compose(functions: F[]): F {
    
    return function(x) {
        let result = x
        functions.reverse().forEach((func) => result = func(result))
        return result
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */