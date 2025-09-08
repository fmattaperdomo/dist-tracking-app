"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShipmentRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
const infrastructure_1 = require("../../infrastructure");
const shipment_middleware_1 = require("../middlewares/shipment.middleware");
class ShipmentRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const datasource = new infrastructure_1.ShipmentDatasourceImpl();
        const shipmentRepository = new infrastructure_1.ShipmentRepositoryImpl(datasource);
        const controller = new controller_1.ShipmentController(shipmentRepository);
        router.post('/register', controller.registerShipment);
        router.get('/', controller.getShipments);
        return router;
    }
}
exports.ShipmentRoutes = ShipmentRoutes;
