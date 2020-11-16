import UserControllerComposer from './user-controller-composer'

import ExpressRouterAdapter from '../../lib/interfaces/express-adapters/express-router-adapter'
import ExpressMiddlewareAdapter from '../../lib/interfaces/express-adapters/express-middleware-adapter'

const userController = UserControllerComposer.compose()

/**
 * @openapi
 * /users:
 *   get:
 *      summary: "Ger all users"
 *      description: |
 *        Return all users
 *      tags:
 *        - "user"
 *
 *      responses:
 *        '200':
 *          description: "Ok"
 *          content:
 *            application-json:
 *              schema:
 *                type: object
 *                properties:
 *                  users:
 *                    type: array
 *                    items:
 *                      $ref: "#/components/schemas/User"
 *        400:
 *          description: "Error"
 *          content:
 *            application-json:
 *              schema:
 *                $ref: "#/components/schemas/Error"
 *
 *      operationId: getAllUsers
 *      x-eov-operation-handler: user/user-handler
 */
export const getAllUsers = [
  ExpressRouterAdapter.adapt((req) => userController.getAllUsers(req)),
]

/**
 * @openapi
 * /users/{id}:
 *   get:
 *      summary: "Get User"
 *      description: |
 *        Return user data
 *      tags:
 *        - "user"
 *
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *            type: integer
 *
 *      responses:
 *        200:
 *          description: "Ok"
 *          content:
 *            application-json:
 *              schema:
 *                type: object
 *                properties:
 *                  user:
 *                    $ref: "#/components/schemas/User"
 *        400:
 *          description: "Error"
 *          content:
 *            application-json:
 *              schema:
 *                $ref: "#/components/schemas/Error"
 *
 *      operationId: getUser
 *      x-eov-operation-handler: user/user-handler
 */
export const getUser = [
  ExpressRouterAdapter.adapt((req) => userController.getUser(req)),
]

/**
 * @openapi
 * /users:
 *   post:
 *      summary: "Create User"
 *      description: |
 *        Return user data
 *      tags:
 *        - "user"
 *
 *      requestBody:
 *        description: User info
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                name:
 *                  type: string
 *                email:
 *                  type: string
 *
 *      responses:
 *        '201':
 *          description: "Created"
 *          content:
 *            application-json:
 *              schema:
 *                type: object
 *                properties:
 *                  user:
 *                    $ref: "#/components/schemas/User"
 *        400:
 *          description: "Error"
 *          content:
 *            application-json:
 *              schema:
 *                $ref: "#/components/schemas/Error"
 *
 *      operationId: createUser
 *      x-eov-operation-handler: user/user-handler
 */
export const createUser = [
  ExpressRouterAdapter.adapt((req) => userController.createUser(req)),
]

/**
 * @openapi
 * /users/{id}:
 *   put:
 *      summary: "Update User"
 *      description: |
 *        Return user data
 *      tags:
 *        - "user"
 *
 *      parameters:
 *        - in: path
 *          required: true
 *          name: id
 *          schema:
 *            type: integer
 *
 *      requestBody:
 *        description: User info
 *        required: false
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                name:
 *                  type: string
 *                email:
 *                  type: string
 *
 *      responses:
 *        '200':
 *          description: "Ok"
 *          content:
 *            application-json:
 *              schema:
 *                type: object
 *                properties:
 *                  user:
 *                    $ref: "#/components/schemas/User"
 *        400:
 *          description: "Error"
 *          content:
 *            application-json:
 *              schema:
 *                $ref: "#/components/schemas/Error"
 *
 *      operationId: updateUser
 *      x-eov-operation-handler: user/user-handler
 */
export const updateUser = [
  ExpressRouterAdapter.adapt((req) => userController.updateUser(req)),
]

/**
 * @openapi
 * /users/{id}:
 *   delete:
 *      summary: "Delete User"
 *      description: |
 *        Delete user
 *      tags:
 *        - "user"
 *
 *      parameters:
 *        - in: path
 *          required: true
 *          name: id
 *          schema:
 *            type: integer

 *
 *      responses:
 *        204:
 *          description: "No Content"
 *        400:
 *          description: "Error"
 *          content:
 *            application-json:
 *              schema:
 *                $ref: "#/components/schemas/Error"
 *
 *      operationId: deleteUser
 *      x-eov-operation-handler: user/user-handler
 */
export const deleteUser = [
  ExpressRouterAdapter.adapt((req) => userController.deleteUser(req)),
]
