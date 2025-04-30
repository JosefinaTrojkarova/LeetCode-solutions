// Last updated: 4/30/2025, 12:49:07 PM
class TimeLimitedCache {
    private cache: Map<number, { value: number, expiry: number }>;

    constructor() {
        this.cache = new Map();
    }
    
    set(key: number, value: number, duration: number): boolean {
        const current = this.cache.get(key)
        this.cache.set(key, {value, expiry: Date.now() + duration})
        return current !== undefined && current.expiry > Date.now();
    }
    
    get(key: number): number {
        const value = this.cache.get(key)
        return (value?.expiry ?? 0) > Date.now() ? value.value : -1
    }
    
    count(): number {
        let count = 0
        for (const [key, value] of this.cache) {
            if ((value?.expiry ?? 0) > Date.now()) count++
        }
        return count
    }
}

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */