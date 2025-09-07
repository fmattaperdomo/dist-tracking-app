"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShipmentMapper = void 0;
const domain_1 = require("../../domain");
class ShipmentMapper {
    static shipmentEntityFromObject(object) {
        const { id, _id, description, sender_contact, receiver_contact, createdAt, user } = object;
        if (!_id || !id) {
            throw domain_1.CustomError.badRequest('Missing id');
        }
        if (!description)
            throw domain_1.CustomError.badRequest('Missing description');
        if (!sender_contact)
            throw domain_1.CustomError.badRequest('Missing sender contact');
        if (!receiver_contact)
            throw domain_1.CustomError.badRequest('Missing receiver contact');
        if (!createdAt)
            throw domain_1.CustomError.badRequest('Missing createdAt');
        if (!user)
            throw domain_1.CustomError.badRequest('Missing user ID');
        return new domain_1.ShipmentEntity(_id || id, description, sender_contact, receiver_contact, createdAt, user);
    }
}
exports.ShipmentMapper = ShipmentMapper;
