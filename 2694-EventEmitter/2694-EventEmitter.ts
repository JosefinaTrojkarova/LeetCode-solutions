// Last updated: 5/2/2025, 11:38:42 AM
type Callback = (...args: any[]) => any;
type Subscription = {
    unsubscribe: () => void
}

class EventEmitter {
    private callbacks: { [key: string]: Callback[] };

    constructor() {
        this.callbacks = {}
    }
    
    subscribe(eventName: string, callback: Callback): Subscription {
        if (!this.callbacks[eventName]) this.callbacks[eventName] = []
        this.callbacks[eventName].push(callback)

        return {
            unsubscribe: () => {
                this.callbacks[eventName].splice(this.callbacks[eventName].indexOf(callback), 1)
            }
        };
    }
    
    emit(eventName: string, args: any[] = []): any[] {
        return this.callbacks[eventName] ? this.callbacks[eventName].map((fn) => fn(...args)) : []
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */