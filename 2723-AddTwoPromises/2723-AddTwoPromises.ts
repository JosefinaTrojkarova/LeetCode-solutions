// Last updated: 4/29/2025, 1:43:27 PM
type P = Promise<number>

async function addTwoPromises(promise1: P, promise2: P): P {
    return new Promise(async (resolve, reject) => {
        const num1 = await promise1
        const num2 = await promise2
        resolve(num1 + num2)
    })
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */