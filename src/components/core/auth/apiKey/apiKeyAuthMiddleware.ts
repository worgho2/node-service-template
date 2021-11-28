import { Request, Response, NextFunction } from 'express'
import { BaseMiddleware, request, response, next } from 'inversify-express-utils'
import { inject, injectable } from 'inversify'
import { TYPES } from '../../../../types'
import { Logger } from '../../../../utils/logger'
import { BaseError } from '../../../../utils/baseError'

@injectable()
export class ApiKeyAuthMiddleware extends BaseMiddleware {
    constructor(@inject(TYPES.Logger) private readonly logger: Logger) {
        super()
    }

    async handler(@request() req: Request, @response() res: Response, @next() next: NextFunction) {
        this.logger.info('ApiKeyAuthMiddleware.handler called')

        try {
            next()
        } catch (error) {
            if (error instanceof BaseError) {
                const request = {
                    path: req.path,
                    params: req.params,
                    query: req.query,
                    body: req.body,
                }

                this.logger.error(error.printable(), request)
                res.status(error.httpStatusCode).json(error.publicObject())
                return
            }

            throw error
        }
    }
}
