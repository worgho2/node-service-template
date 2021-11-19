export const TYPES = {
    /**
     * Middlewares
     */
    FirebaseAuthMiddleware: Symbol('FirebaseAuthMiddleware'),
    ApiKeyAuthMiddleware: Symbol('ApiKeyAuthMiddleware'),
    WebhookAuthMiddleware: Symbol('WebhookAuthMiddleware'),
    ErrorMiddleware: Symbol('ErrorMiddleware'),
    LoggerMiddleware: Symbol('LoggerMiddleware'),

    /**
     * Utils
     */
    Logger: Symbol('Logger'),

    /**
     * User
     */
    UserController: Symbol('UserController'),
}
