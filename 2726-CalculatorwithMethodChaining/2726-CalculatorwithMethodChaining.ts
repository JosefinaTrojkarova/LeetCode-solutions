// Last updated: 5/2/2025, 11:56:57 AM
class Calculator {
    private result: number
    
    constructor(value: number) {
        this.result = value
    }
    
    add(value: number): Calculator {
        this.result += value
        return new Calculator(this.result)
    }
    
    subtract(value: number): Calculator {
        this.result -= value
        return new Calculator(this.result)
    }
    
    multiply(value: number): Calculator {
        this.result *= value
        return new Calculator(this.result)
    }
    
    divide(value: number): Calculator {
        if (!value) throw new Error("Division by zero is not allowed")
        this.result /= value
        return new Calculator(this.result)
    }
    
    power(value: number): Calculator {
        this.result **= value
        return new Calculator(this.result)
    }
    
    getResult(): number {
        return this.result
    }
}