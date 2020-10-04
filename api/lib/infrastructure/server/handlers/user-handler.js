import ExpressRouterAdapter from '../../../interfaces/express-adapters/express-router-adapter'
import ExpressMiddlewareAdapter from '../../../interfaces/express-adapters/express-middleware-adapter'
import UserControllerComposer from '../../../interfaces/controllers/composers/user-controller-composer'

const userController = UserControllerComposer.compose()

/**
 * @swagger
 * /users:
 *   get:
 *      summary: "Ger all users"
 *      description: |
 *          Return all users
 *      tags:
 *          - "user"
 *
 *      operationId: getAllUsers
 *      x-eov-operation-handler: user-handler
 *
 *      responses:
 *          '200':
 *              description: "Successful operation"
 *              content:
 *                application-json:
 *                  schema:
 *                    $ref: "#/components/schemas/UserLevels"
 */
export const getAllUsers = [
  ExpressRouterAdapter.adapt((req) => userController.getAllUsers(req)),
]

/**
 * @swagger
 * /users/{id}:
 *   get:
 *      summary: "Get User"
 *      description: |
 *          Return user data
 *      tags:
 *          - "user"
 *
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: User id
 *
 *      operationId: getUser
 *      x-eov-operation-handler: user-handler
 *
 *      responses:
 *          '200':
 *              description: "Successful operation"
 *              content:
 *                application-json:
 *                  schema:
 *                    $ref: "#/components/schemas/UserLevels"
 */
export const getUser = [
  ExpressRouterAdapter.adapt((req) => userController.getUser(req)),
]

/**
 * @swagger
 * /users:
 *   post:
 *      summary: "Create User"
 *      description: |
 *          Return user data
 *      tags:
 *          - "user"
 *
 *      requestBody:
 *          description: User info
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *                          email:
 *                              type: string
 *
 *      operationId: createUser
 *      x-eov-operation-handler: user-handler
 *
 *      responses:
 *          '200':
 *              description: "Successful operation"
 *              content:
 *                application-json:
 *                  schema:
 *                    $ref: "#/components/schemas/UserLevels"
 */
export const createUser = [
  ExpressRouterAdapter.adapt((req) => userController.createUser(req)),
]

/**
 * @swagger
 * /users/{id}:
 *   put:
 *      summary: "Update User"
 *      description: |
 *          Return user data
 *      tags:
 *          - "user"
 *
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: User id
 *
 *      requestBody:
 *          description: User info
 *          required: false
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *                          email:
 *                              type: string
 *
 *      operationId: updateUser
 *      x-eov-operation-handler: user-handler
 *
 *      responses:
 *          '200':
 *              description: "Successful operation"
 *              content:
 *                application-json:
 *                  schema:
 *                    $ref: "#/components/schemas/UserLevels"
 */
export const updateUser = [
  ExpressRouterAdapter.adapt((req) => userController.updateUser(req)),
]

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *      summary: "Delete User"
 *      description: |
 *          Delete user
 *      tags:
 *          - "user"
 *
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: User id
 *
 *      operationId: deleteUser
 *      x-eov-operation-handler: user-handler
 *
 *      responses:
 *          '200':
 *              description: "Successful operation"
 *              content:
 *                application-json:
 *                  schema:
 *                    $ref: "#/components/schemas/UserLevels"
 */
export const deleteUser = [
  ExpressRouterAdapter.adapt((req) => userController.deleteUser(req)),
]
