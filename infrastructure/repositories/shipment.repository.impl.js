"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShipmentRepositoryImpl = void 0;
class ShipmentRepositoryImpl {
    constructor(shipmentDatasource) {
        this.shipmentDatasource = shipmentDatasource;
    }
    register(registerShipmentDto) {
        return this.shipmentDatasource.register(registerShipmentDto);
    }
}
exports.ShipmentRepositoryImpl = ShipmentRepositoryImpl;
