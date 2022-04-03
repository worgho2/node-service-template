import 'reflect-metadata'
import httpContext from 'express-http-context'
import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import morgan from 'morgan'
import { InversifyExpressServer } from 'inversify-express-utils'
import container from './ioc/container'
import { TYPES } from './ioc/types'
import { ILogger } from '../src/utils/logger'
import { IExceptionHandler } from '../src/utils/exceptionHandler'

const logger = container.get<ILogger>(TYPES.Logger)
const exceptionHandler = container.get<IExceptionHandler>(TYPES.ExceptionHandler)

export const app = new InversifyExpressServer(container, null, { rootPath: '/api' })
    .setConfig((appConfig) =>
        appConfig.use([
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
    .setErrorConfig((appErrorConfig) => appErrorConfig.use(exceptionHandler.handler))
    .build()
