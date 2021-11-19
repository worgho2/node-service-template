import { Request, Response, NextFunction } from 'express'
import { BaseMiddleware, request, response, next } from 'inversify-express-utils'
import { inject, injectable } from 'inversify'
import { TYPES } from '../types'
import { Logger } from '../utils/logger'

@injectable()
export class FirebaseAuthMiddleware extends BaseMiddleware {
    constructor(@inject(TYPES.Logger) private readonly logger: Logger) {
        super()
    }

    async handler(@request() req: Request, @response() res: Response, @next() next: NextFunction) {
        this.logger.info('FirebaseAuthMiddleware.handler called')
        next()
    }
}
