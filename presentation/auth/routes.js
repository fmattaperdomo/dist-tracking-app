"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
const infrastructure_1 = require("../../infrastructure");
const auth_middleware_1 = require("../middlewares/auth.middleware");
class AuthRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const datasource = new infrastructure_1.AuthDatasourceImpl();
        const authRepository = new infrastructure_1.AuthRepositoryImpl(datasource);
        const controller = new controller_1.AuthController(authRepository);
/**
 * Register a new user
 * @openapi
 * /auth/login:
 *    post:
 *      tags:
 *        - auth
 *      summary: "Register a new user"
 *      description: Log in a new user and get session token
 *      responses:
 *        '200':
 *          description: Return the object inserted into the collection.
 *        '422':
 *          description: Validation error.
 *      parameters:
 *          content:
 *            application/json:
 *              schema:
 *                 $ref: "#/components/schemas/authLogin"
 */

        router.post('/login', controller.loginUser);
        /**
         * http://localhost:3001/api
         * 
         * Route register new user
         * @openapi
         * /auth/register:
         *      post:
         *          tags:
         *              - auth
         *          summary: "Register nuevo usario"
         *          description: "Esta ruta es para registrar un nuevo usuario"
         *          requestBody:
         *              content:
         *                  application/json:
         *                      schema:
         *                          $ref: "#/components/schemas/authRegister"
         *          responses:
         *                  '201':
         *                      description: El usuario se registra de manera correcta
         *                  '403':
         *                      description: Error por validacion
         */
        router.post('/register', controller.registerUser);
        /**
         * http://localhost:3000/api/v1
         * 
         * Route get a user
         * @openapi
         * /auth:
         *      get:
         *          tags:
         *              - auth
         *          summary: "Get a user"
         *          description: "Route to get a user"
         *          requestBody:
         *              content:
         *                  application/json:
         *                      schema:
         *                          $ref: "#/components/schemas/authRegister"
         *          responses:
         *                  '200':
         *                      description: a user was obtained successfully
         *                  '500':
         *                      description: Internal error
         */
        router.get('/',[auth_middleware_1.AuthMiddleware.validateJWT], controller.getUsers);
        return router;
    }
}
exports.AuthRoutes = AuthRoutes;
