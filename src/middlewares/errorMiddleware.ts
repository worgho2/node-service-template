import { NextFunction, Request, Response } from 'express'
import { injectable } from 'inversify'
import { request, response, next } from 'inversify-express-utils'
import container from '../container'
import { TYPES } from '../types'
import { Logger } from '../utils/logger'

@injectable()
export class ErrorMiddleware {
    async handler(err: Error, @request() req: Request, @response() res: Response, @next() next: NextFunction) {
        const logger = container.get<Logger>(TYPES.Logger)

        logger.error(`${err.name || '-'} : ${err.message || '-'} : ${err.stack}`)

        res.status(500).send({
            error: err.name,
            message: err.message,
        })

        next()
    }
}
