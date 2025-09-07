"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitMapper = void 0;
const domain_1 = require("../../domain");
class UnitMapper {
    static unitEntityFromObject(object) {
        const { id, _id, description, weight, dimensions, currentStatus, createdAt, user, shipment } = object;
        if (!_id || !id) {
            throw domain_1.CustomError.badRequest('Missing id');
        }
        if (!description)
            throw domain_1.CustomError.badRequest('Missing description');
        if (!weight)
            throw domain_1.CustomError.badRequest('Missing weight');
        if (!dimensions)
            throw domain_1.CustomError.badRequest('Missing dimensions');
        if (!currentStatus)
            throw domain_1.CustomError.badRequest('Missing current status');
        if (!createdAt)
            throw domain_1.CustomError.badRequest('Missing createdAt');
        if (!user)
            throw domain_1.CustomError.badRequest('Missing user id');
        if (!shipment)
            throw domain_1.CustomError.badRequest('Missing shipment id');
        return new domain_1.UnitEntity(_id || id, description, weight, dimensions, currentStatus, createdAt, user, shipment);
    }
}
exports.UnitMapper = UnitMapper;
