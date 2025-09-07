"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMapper = void 0;
const domain_1 = require("../../domain");
class UserMapper {
    static userEntityFromObject(object) {
        const { id, _id, name, email, role, password, createdAt } = object;
        if (!_id || !id) {
            throw domain_1.CustomError.badRequest('Missing id');
        }
        if (!name)
            throw domain_1.CustomError.badRequest('Missing name');
        if (!email)
            throw domain_1.CustomError.badRequest('Missing email');
        if (!password)
            throw domain_1.CustomError.badRequest('Missing password');
        if (!role)
            throw domain_1.CustomError.badRequest('Missing roles');
        if (!createdAt)
            throw domain_1.CustomError.badRequest('Missing createAt');
        return new domain_1.UserEntity(_id || id, name, email, role, password, createdAt);
    }
}
exports.UserMapper = UserMapper;
