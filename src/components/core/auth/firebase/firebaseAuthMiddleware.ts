import { Request, Response, NextFunction } from 'express'
import { BaseMiddleware, request, response, next } from 'inversify-express-utils'
import { inject, injectable } from 'inversify'
import { TYPES } from '../../../../types'
import { Logger } from '../../../../utils/logger'
import { BaseError } from '../../../../utils/baseError'

@injectable()
export class FirebaseAuthMiddleware extends BaseMiddleware {
    constructor(@inject(TYPES.Logger) private readonly logger: Logger) {
        super()
    }

    async handler(@request() req: Request, @response() res: Response, @next() nextFn: NextFunction) {
        this.logger.info('FirebaseAuthMiddleware.handler called')

        try {
            nextFn()
        } catch (error) {
            if (error instanceof BaseError) {
                const requestData = {
                    path: req.path,
                    params: req.params,
                    query: req.query,
                    body: req.body,
                }

                this.logger.error(error.printable(), requestData)
                res.status(error.httpStatusCode).json(error.publicObject())
                return
            }

            throw error
        }
    }
}
