import { Request, Response } from 'express'
import { inject } from 'inversify'
import { request, response, controller, httpGet, requestParam } from 'inversify-express-utils'
import { TYPES } from '../../types'
import { Logger } from '../../utils/logger'
import { BaseController } from '../core/baseController'
import { IEnvironmentService } from '../core/environment/environmentService'
import { UserNotFoundError } from './userExceptions'
import { IUserService } from './userService'

@controller('/users')
export class UserController extends BaseController {
    constructor(
        @inject(TYPES.Logger) protected readonly logger: Logger,
        @inject(TYPES.EnvironmentService) protected readonly environmentService: IEnvironmentService,
        @inject(TYPES.UserService) protected readonly userService: IUserService
    ) {
        super(logger)
    }

    @httpGet('/:uid', TYPES.FirebaseAuthMiddleware)
    async getUser(@request() req: Request, @response() res: Response, @requestParam('uid') uid: string) {
        this.logger.info('UserController.getUser called')

        try {
            const user = await this.userService.getUser(uid)
            res.status(200).json(user)
        } catch (error) {
            this.tryHandleControllerError(req, res, error)
        }
    }

    @httpGet('/:uid/fail', TYPES.FirebaseAuthMiddleware)
    async getUserFail(@request() req: Request, @response() res: Response, @requestParam('uid') uid: string) {
        this.logger.info('UserController.getUserFail called')

        try {
            const user = await this.userService.getUserFail(uid)
            res.status(200).json(user)
        } catch (error) {
            this.tryHandleControllerError(req, res, error)
        }
    }
}
