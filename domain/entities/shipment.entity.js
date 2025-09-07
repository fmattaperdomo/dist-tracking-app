"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShipmentEntity = void 0;
class ShipmentEntity {
    constructor(id, description, sender_contact, receiver_contact, createdAt, user) {
        this.id = id;
        this.description = description;
        this.sender_contact = sender_contact;
        this.receiver_contact = receiver_contact;
        this.createdAt = createdAt;
        this.user = user;
    }
}
exports.ShipmentEntity = ShipmentEntity;
