import { BaseError } from '../../../utils/baseError'

export class ForbiddenError extends BaseError {
    constructor() {
        super('Forbidden', `You don't have permission to access this content`, 403)
    }
}

export class UnauthorizedError extends BaseError {
    constructor() {
        super('Unauthorized', `This request requires authentication`, 401)
    }
}
