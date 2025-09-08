"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
const infrastructure_1 = require("../../infrastructure");
const unit_middleware_1 = require("../middlewares/unit.middleware");
class UnitRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const datasource = new infrastructure_1.UnitDatasourceImpl();
        const unitRepository = new infrastructure_1.UnitRepositoryImpl(datasource);
        const controller = new controller_1.UnitController(unitRepository);
        router.post('/register', controller.registerUnit);
        router.get('/', controller.getUnits);
        router.get('/:id',controller.getUnitsId);
        return router;
    }
}
exports.UnitRoutes = UnitRoutes;
