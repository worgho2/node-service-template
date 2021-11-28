import { BaseError } from '../../../utils/baseError'

export class UserNotFoundError extends BaseError {
    constructor(uid: string) {
        super('User Not Found', `${uid} does not correspond to any registered user id`, 400)
    }
}
