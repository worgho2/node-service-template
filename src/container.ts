import { Container } from 'inversify'
import { FirebaseAuthMiddleware } from './components/core/auth/firebase/firebaseAuthMiddleware'
import { ApiKeyAuthMiddleware } from './components/core/auth/apiKey/apiKeyAuthMiddleware'
import { ExceptionHandler, IExceptionHandler } from './utils/exceptionHandler'
import { Logger } from './utils/logger'
import { UserController } from './components/user/userController'
import { TYPES } from './types'
import { EnvironmentService, IEnvironmentService } from './components/core/environment/environmentService'
import { BaseMiddleware } from 'inversify-express-utils'
import { IUserService, UserService } from './components/user/userService'

const container = new Container()

/**
 * Utils
 */
container.bind<Logger>(TYPES.Logger).to(Logger).inSingletonScope()
container.bind<IExceptionHandler>(TYPES.ExceptionHandler).to(ExceptionHandler).inSingletonScope()

/**
 * Core
 */
container.bind<BaseMiddleware>(TYPES.FirebaseAuthMiddleware).to(FirebaseAuthMiddleware).inSingletonScope()
container.bind<BaseMiddleware>(TYPES.ApiKeyAuthMiddleware).to(ApiKeyAuthMiddleware).inSingletonScope()
container.bind<IEnvironmentService>(TYPES.EnvironmentService).to(EnvironmentService).inRequestScope()

/**
 * User
 */
container.bind<UserController>(TYPES.UserController).to(UserController).inRequestScope()
container.bind<IUserService>(TYPES.UserService).to(UserService).inSingletonScope()

export default container
