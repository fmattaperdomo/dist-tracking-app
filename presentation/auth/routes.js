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
        router.post('/login', controller.loginUser);
        router.post('/register', controller.registerUser);
        router.get('/', [auth_middleware_1.AuthMiddleware.validateJWT], controller.getUsers);
        return router;
    }
}
exports.AuthRoutes = AuthRoutes;
