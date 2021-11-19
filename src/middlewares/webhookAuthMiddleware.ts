import { Request, Response, NextFunction } from 'express'
import { BaseMiddleware, request, response, next } from 'inversify-express-utils'
import { inject, injectable } from 'inversify'
import { Logger } from '../utils/logger'
import { TYPES } from '../types'

@injectable()
export class WebhookAuthMiddleware extends BaseMiddleware {
    constructor(@inject(TYPES.Logger) private readonly logger: Logger) {
        super()
    }

    async handler(@request() req: Request, @response() res: Response, @next() next: NextFunction) {
        this.logger.info('WebhookAuthMiddleware.handler called')
        next()
    }
}
