import { BaseError } from '../../../../utils/baseError'

export class UnauthorizedError extends BaseError {
    constructor() {
        super('Unauthorized', `This request requires authentication`, 401)
    }
}
