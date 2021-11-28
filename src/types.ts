export const TYPES = {
    /**
     * Utils
     */
    Logger: Symbol('Logger'),
    ExceptionHandler: Symbol('ExceptionHandler'),

    /**
     * Core
     */
    FirebaseAuthMiddleware: Symbol('FirebaseAuthMiddleware'),
    ApiKeyAuthMiddleware: Symbol('ApiKeyAuthMiddleware'),
    EnvironmentService: Symbol('EnvironmentService'),

    /**
     * User
     */
    UserController: Symbol('UserController'),
    UserService: Symbol('UserService'),
}
