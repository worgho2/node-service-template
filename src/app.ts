import 'reflect-metadata'
import * as httpContext from 'express-http-context'
import * as express from 'express'
import * as helmet from 'helmet'
import * as cors from 'cors'
import * as morgan from 'morgan'
import { InversifyExpressServer } from 'inversify-express-utils'
import container from './container'
import { TYPES } from './types'
import { ILogger } from './utils/logger'
import { IExceptionHandler } from './utils/exceptionHandler'

const logger = container.get<ILogger>(TYPES.Logger)
const exceptionHandler = container.get<IExceptionHandler>(TYPES.ExceptionHandler)

export const app = new InversifyExpressServer(container, null, { rootPath: '/api' })
    .setConfig((app) =>
        app.use([
            httpContext.middleware,
            morgan(':method :url :status :res[content-length] - :response-time ms', {
                stream: {
                    write: logger.http,
                },
            }),
            helmet(),
            cors({
                origin: true,
            }),
            express.urlencoded({
                extended: true,
            }),
            express.json({
                type: '*/*',
                limit: '50mb',
            }),
            express.raw({
                type: '*/*',
                limit: '50mb',
            }),
            express.text({
                type: '*/*',
                limit: '50mb',
            }),
        ])
    )
    .setErrorConfig((app) => app.use(exceptionHandler.handler))
    .build()
