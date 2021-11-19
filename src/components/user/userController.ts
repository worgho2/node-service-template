import { Request, Response } from 'express'
import { inject } from 'inversify'
import { request, response, controller, httpGet, BaseHttpController, httpPost } from 'inversify-express-utils'
import { TYPES } from '../../types'
import { Logger } from '../../utils/logger'

@controller('/user')
export class UserController extends BaseHttpController {
    constructor(@inject(TYPES.Logger) private readonly logger: Logger) {
        super()
    }

    @httpGet('/', TYPES.FirebaseAuthMiddleware)
    async getUser(@request() req: Request, @response() res: Response) {
        try {
            this.logger.info('started request')
            this.logger.warn('ish na request')
            res.status(200).json({ user: 'marcos' })
        } catch (error) {
            throw error //tentar handlar o erro se não der, passar pra frente
        }
    }

    @httpGet('/a', TYPES.FirebaseAuthMiddleware)
    async getUsera(@request() req: Request, @response() res: Response) {
        try {
            const a = new Error()
            // a.name = 'err brabo de ruer'
            // a.message = 'samambaia'
            a.stack = JSON.stringify({ test: 1, testtt: 2 })
            throw a
        } catch (error) {
            throw error //tentar handlar o erro se não der, passar pra frente
        }
    }
}
