"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const domain_1 = require("../../domain");
const mongodb_1 = require("../../data/mongodb");
const logger_plugin_1 = require("../plugins/logger.plugin");
class AuthController {
    constructor(authRepository) {
        this.authRepository = authRepository;
        this.logger = (0, logger_plugin_1.buildLogger)(AuthController.name);
        this.handleError = (error, res) => {
            if (error instanceof domain_1.CustomError) {
                return res.status(error.statusCode).json({ error: error.message });
            }
            this.logger.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
        };
        this.registerUser = (req, res) => {
            const [error, registerUserDto] = domain_1.RegisterUserDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            new domain_1.RegisterUser(this.authRepository)
                .execute(registerUserDto)
                .then(data => res.status(200).json(data))
                .catch(error => this.handleError(error, res));
        };
        this.loginUser = (req, res) => {
            const [error, loginUserDto] = domain_1.LoginUserDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            new domain_1.LoginUser(this.authRepository)
                .execute(loginUserDto)
                .then(data => res.status(200).json(data))
                .catch(error => this.handleError(error, res));
        };
        this.getUsers = (req, res) => {
            mongodb_1.UserModel.find()
                .then(users => {
                res.status(200).json({
                    users
                });
            })
                .catch(() => res.status(500).json({ error: 'Internal server error' }));
        };
        this.getUsersId = (req, res) => {
            mongodb_1.UserModel.findById(req.params.id)
                .then(users => {
                res.status(200).json({
                    users
                });
            })
                .catch(() => res.status(500).json({ error: 'Internal server error' }));
        };
    }
}
exports.AuthController = AuthController;
