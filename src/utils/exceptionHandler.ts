import { NextFunction, Request, Response } from 'express'
import { injectable } from 'inversify'
import { request, response, next } from 'inversify-express-utils'
import container from '../container'
import { TYPES } from '../types'
import { ILogger } from '../utils/logger'

export interface IExceptionHandler {
    handler(err: Error, req: Request, res: Response, next: NextFunction): any
}

@injectable()
export class ExceptionHandler implements IExceptionHandler {
    async handler(err: Error, @request() req: Request, @response() res: Response, @next() next: NextFunction) {
        const logger = container.get<ILogger>(TYPES.Logger)
        logger.error('Internal Server Error', err)
        res.sendStatus(500)
        next()
    }
}
