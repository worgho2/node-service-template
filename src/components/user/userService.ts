import { inject, injectable } from 'inversify'
import { TYPES } from '../../types'
import { ILogger } from '../../utils/logger'
import { User } from './models/user'
import { UserNotFoundError } from './userExceptions'

export interface IUserService {
    getUser(uid: string): Promise<User>
    getUserFail(uid: string): Promise<User>
}

@injectable()
export class UserService implements IUserService {
    constructor(@inject(TYPES.Logger) private readonly logger: ILogger) {}

    async getUser(uid: string): Promise<User> {
        try {
            return <User>{
                uid: uid,
            }
        } catch (error) {
            throw error
        }
    }

    async getUserFail(uid: string): Promise<User> {
        try {
            throw new UserNotFoundError(uid)
        } catch (error) {
            throw error
        }
    }
}
