import { NextFunction, Request, Response } from 'express'
import { injectable } from 'inversify'
import { request, response, next } from 'inversify-express-utils'
import container from '../container'
import { TYPES } from '../types'
import { ILogger } from '../utils/logger'
import { BaseError } from './baseError'

export interface IExceptionHandler {
    handler(err: Error, req: Request, res: Response, next: NextFunction): any
}

@injectable()
export class ExceptionHandler implements IExceptionHandler {
    async handler(err: Error, @request() req: Request, @response() res: Response, @next() nextFn: NextFunction) {
        const logger = container.get<ILogger>(TYPES.Logger)

        const error = new BaseError(err.name, err.message, 500)
        error.stack = err.stack

        const requestData = {
            path: req.path,
            params: req.params,
            query: req.query,
            body: req.body,
        }

        logger.error(error.printable(), requestData)

        res.sendStatus(500)
        nextFn()
    }
}
