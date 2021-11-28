import { Request, Response } from 'express'
import { inject, injectable } from 'inversify'
import { BaseHttpController, request, response } from 'inversify-express-utils'
import { TYPES } from '../../types'
import { BaseError } from '../../utils/baseError'
import { ILogger } from '../../utils/logger'

@injectable()
export class BaseController extends BaseHttpController {
    constructor(@inject(TYPES.Logger) protected readonly logger: ILogger) {
        super()
    }

    tryHandleControllerError(@request() req: Request, @response() res: Response, error: Error): any {
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
