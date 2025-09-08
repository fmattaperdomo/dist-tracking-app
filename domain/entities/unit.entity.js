"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitEntity = void 0;
class UnitEntity {
    constructor(id, description, weight, dimensions, currentStatus, createdAt, user, shipment) {
        this.id = id;
        this.description = description;
        this.weight = weight;
        this.dimensions = dimensions;
        this.currentStatus = currentStatus;
        this.createdAt = createdAt;
        this.user = user;
        this.shipment = shipment;
    }
}
exports.UnitEntity = UnitEntity;
