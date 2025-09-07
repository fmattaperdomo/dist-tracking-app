"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutes = void 0;
const express_1 = require("express");
const routes_1 = require("./auth/routes");
const routes_2 = require("./checkpoint/routes");
const routes_3 = require("./shipment/routes");
const routes_4 = require("./unit/routes");
class AppRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        router.use('/api/v1/auth', routes_1.AuthRoutes.routes);
        router.use('/api/v1/checkpoint', routes_2.CheckpointRoutes.routes);
        router.use('/api/v1/shipment', routes_3.ShipmentRoutes.routes);
        router.use('/api/v1/unit', routes_4.UnitRoutes.routes);
        return router;
    }
}
exports.AppRoutes = AppRoutes;
