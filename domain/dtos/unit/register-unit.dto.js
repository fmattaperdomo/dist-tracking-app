"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterUnitDto = void 0;
const config_1 = require("../../../config");
class RegisterUnitDto {
    constructor(description, weight, dimensions, currentStatus, createdAt, user, shipment) {
        this.description = description;
        this.weight = weight;
        this.dimensions = dimensions;
        this.currentStatus = currentStatus;
        this.createdAt = createdAt;
        this.user = user;
        this.shipment = shipment;
    }
    static create(object) {
        const { description, weight, dimensions, currentStatus, createdAt, user, shipment } = object;
        if (!description)
            return ['Missing description'];
        if (description.length < 6)
            return ['Description too short'];
        if (!weight)
            return ['Missing weight'];
        if (!dimensions)
            return ['Missing dimensions'];
        if (dimensions.length < 6)
            return ['Dimensions too short'];
        if (!currentStatus)
            return ['Missing current status'];
        if (currentStatus.length < 3)
            return ['Current status too short'];
        if (!createdAt)
            return ['Missing created at'];
        if (!user)
            return ['Missing user'];
        if (!config_1.Validators.isMongoID(user))
            return ['Invalid User ID'];
        if (!shipment)
            return ['Missing shipment ID'];
        if (!config_1.Validators.isMongoID(shipment))
            return ['Invalid shipment ID'];
        return [
            undefined,
            new RegisterUnitDto(description, weight, dimensions, currentStatus, createdAt, user, shipment)
        ];
    }
}
exports.RegisterUnitDto = RegisterUnitDto;
