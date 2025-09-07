"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterShipmentDto = void 0;
const config_1 = require("../../../config");
class RegisterShipmentDto {
    constructor(description, sender_contact, receiver_contact, user) {
        this.description = description;
        this.sender_contact = sender_contact;
        this.receiver_contact = receiver_contact;
        this.user = user;
    }
    static create(object) {
        const { description, sender_contact, receiver_contact, user } = object;
        if (!description)
            return ['Missing description'];
        if (!sender_contact)
            return ['Missing sender contact'];
        if (sender_contact.length < 6)
            return ['sender_contact too short'];
        if (!receiver_contact)
            return ['Missing receiver contact'];
        if (receiver_contact.length < 6)
            return ['receiver contact too short'];
        if (!user)
            return ['Missing user'];
        if (!config_1.Validators.isMongoID(user))
            return ['Invalid User ID'];
        return [
            undefined,
            new RegisterShipmentDto(description, sender_contact, receiver_contact, user)
        ];
    }
}
exports.RegisterShipmentDto = RegisterShipmentDto;
