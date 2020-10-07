import * as dotenv from 'dotenv'
dotenv.config()

import express from 'express'

//Middlewares
import morgan from 'morgan'
import compression from 'compression'
import bodyParser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'
import ErrorHandlerMiddleware from '../lib/interfaces/middlewares/error-handler-middleware'

//Specs
import swaggerUi from 'swagger-ui-express'
import swaggerJsDoc from 'swagger-jsdoc'
import * as OpenApiValidator from 'express-openapi-validator'

const app = express()

//SWAGGER CONFIGURATION
const swaggerDocs = swaggerJsDoc({
  swaggerDefinition: {
    openapi: '3.0.3',
    info: {
      title: 'Template API',
      version: '1.0.0',
      description: 'API documentation',
    },
    servers: [
      {
        url: process.env.SERVER_HOME + '/api',
        description: 'Server API',
      },
    ],
  },
  apis: [
    __dirname + '/../components/user/*.yaml',
    __dirname + '/../components/user/*-handler.js',
  ],
})

//App Middleware install
app.use(morgan('common'))
app.use(compression())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use(helmet())
app.use('/api-spec', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
app.use(
  OpenApiValidator.middleware({
    validateRequests: true,
    apiSpec: swaggerDocs,
    unknownFormats: ['html'],
    operationHandlers: __dirname + '/../components',
  })
)
app.use(ErrorHandlerMiddleware.log)
app.use(ErrorHandlerMiddleware.handle)

app.get('/', (_req, res) =>
  res.status(200).send({
    status: 'Success',
    message: 'Welcome! :)',
  })
)

app.get('*', (_req, res) =>
  res.status(404).send({
    status: 'Error',
    message: 'Path not found :(',
  })
)

export default app
