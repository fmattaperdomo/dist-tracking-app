"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthDatasourceImpl = void 0;
const config_1 = require("../../config");
const mongodb_1 = require("../../data/mongodb");
const domain_1 = require("../../domain");
const user_mapper_1 = require("../mappers/user.mapper");
const logger_plugin_1 = require("../../presentation/plugins/logger.plugin");
class AuthDatasourceImpl {
    constructor(hashPassword = config_1.BcryptAdapter.hash, comparePassword = config_1.BcryptAdapter.compare) {
        this.hashPassword = hashPassword;
        this.comparePassword = comparePassword;
        this.logger = (0, logger_plugin_1.buildLogger)('AuthDatasourceImpl');
    }
    login(loginUserDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = loginUserDto;
            try {
                const user = yield mongodb_1.UserModel.findOne({ email });
                if (!user)
                    throw domain_1.CustomError.badRequest('User does not exists - email');
                const isMatching = this.comparePassword(password, user.password);
                if (!isMatching)
                    throw domain_1.CustomError.badRequest('Password is not valid');
                return user_mapper_1.UserMapper.userEntityFromObject(user);
            }
            catch (error) {
                console.log(error);
                throw domain_1.CustomError.internalServer();
            }
        });
    }
    register(registerUserDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, password } = registerUserDto;
            try {
                const exists = yield mongodb_1.UserModel.findOne({ email });
                if (exists)
                    throw domain_1.CustomError.badRequest('User already exists');
                const user = yield mongodb_1.UserModel.create({
                    name: name,
                    email: email,
                    password: this.hashPassword(password),
                });
                yield user.save();
                return user_mapper_1.UserMapper.userEntityFromObject(user);
            }
            catch (error) {
                this.logger.error(error);
                if (error instanceof domain_1.CustomError) {
                    throw error;
                }
                throw domain_1.CustomError.internalServer();
            }
        });
    }
}
exports.AuthDatasourceImpl = AuthDatasourceImpl;
