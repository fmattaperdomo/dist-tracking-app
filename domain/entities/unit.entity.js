"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitEntity = void 0;
class UnitEntity {
    constructor(id, description, weight, dimensions, currentStatus, createAt, user, shipment) {
        this.id = id;
        this.description = description;
        this.weight = weight;
        this.dimensions = dimensions;
        this.currentStatus = currentStatus;
        this.createAt = createAt;
        this.user = user;
        this.shipment = shipment;
    }
}
exports.UnitEntity = UnitEntity;
