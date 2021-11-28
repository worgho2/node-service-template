import { inject, injectable } from 'inversify'
import { TYPES } from '../../types'
import { ILogger } from '../../utils/logger'
import { User } from './models/user'
import { UserNotFoundError } from './exceptions/userNotFoundError'

export interface IUserService {
    getUser(uid: string): Promise<User>
    getUserFail(uid: string): Promise<User>
}

@injectable()
export class UserService implements IUserService {
    constructor(@inject(TYPES.Logger) private readonly logger: ILogger) {}

    async getUser(uid: string): Promise<User> {
        this.logger.info('UserService.getUser called')

        try {
            return {
                uid,
            } as User
        } catch (error) {
            throw error
        }
    }

    async getUserFail(uid: string): Promise<User> {
        this.logger.info('UserService.getUserFail called')

        try {
            throw new UserNotFoundError(uid)
        } catch (error) {
            throw error
        }
    }
}
