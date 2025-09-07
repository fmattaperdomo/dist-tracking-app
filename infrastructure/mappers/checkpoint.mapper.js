"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckpointMapper = void 0;
const domain_1 = require("../../domain");
class CheckpointMapper {
    static checkpointEntityFromObject(object) {
        const { id, _id, state, comment, location, createdAt, user, unit } = object;
        if (!_id || !id) {
            throw domain_1.CustomError.badRequest('Missing id');
        }
        if (!state)
            throw domain_1.CustomError.badRequest('Missing state');
        if (!comment)
            throw domain_1.CustomError.badRequest('Missing comment');
        if (!location)
            throw domain_1.CustomError.badRequest('Missing location');
        if (!createdAt)
            throw domain_1.CustomError.badRequest('Missing createdAt');
        if (!user)
            throw domain_1.CustomError.badRequest('Missing user ID');
        if (!unit)
            throw domain_1.CustomError.badRequest('Missing unit ID');
        return new domain_1.CheckpointEntity(_id || id, state, comment, location, createdAt, user, unit);
    }
}
exports.CheckpointMapper = CheckpointMapper;
