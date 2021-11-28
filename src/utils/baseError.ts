export class BaseError extends Error {
    public readonly name: string
    public readonly httpStatusCode: number

    constructor(name: string, message: string, httpStatusCode: number) {
        super(message)
        Object.setPrototypeOf(this, new.target.prototype)
        this.name = name
        this.httpStatusCode = httpStatusCode
        Error.captureStackTrace(this)
    }

    printable(): string {
        return JSON.stringify(this.object(), null, 2)
    }

    object(): any {
        const stack = (this.stack || '').split('\n')
        stack.shift()

        return {
            error: this.name,
            message: this.message,
            status: this.httpStatusCode,
            stack,
        }
    }

    publicObject(): any {
        return {
            error: this.name,
            message: this.message,
        }
    }
}
