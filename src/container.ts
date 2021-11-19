import { Container } from 'inversify'
import { FirebaseAuthMiddleware } from './middlewares/firebaseAuthMiddleware'
import { ApiKeyAuthMiddleware } from './middlewares/apiKeyAuthMiddleware'
import { WebhookAuthMiddleware } from './middlewares/webhookAuthMiddleware'
import { ErrorMiddleware } from './middlewares/errorMiddleware'
import { Logger } from './utils/logger'
import { UserController } from './components/user/userController'
import { TYPES } from './types'

const container = new Container()

/**
 * Utils
 */
container.bind<Logger>(TYPES.Logger).to(Logger).inSingletonScope()

/**
 * Middlewares
 */
container.bind<FirebaseAuthMiddleware>(TYPES.FirebaseAuthMiddleware).to(FirebaseAuthMiddleware).inSingletonScope()
container.bind<ApiKeyAuthMiddleware>(TYPES.ApiKeyAuthMiddleware).to(ApiKeyAuthMiddleware).inSingletonScope()
container.bind<WebhookAuthMiddleware>(TYPES.WebhookAuthMiddleware).to(WebhookAuthMiddleware).inSingletonScope()
container.bind<ErrorMiddleware>(TYPES.ErrorMiddleware).to(ErrorMiddleware).inSingletonScope()

/**
 * User
 */
container.bind<UserController>(TYPES.UserController).to(UserController).inRequestScope()

export default container
