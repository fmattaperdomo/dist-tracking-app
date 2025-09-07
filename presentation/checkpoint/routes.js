"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckpointRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
const infrastructure_1 = require("../../infrastructure");
const checkpoint_middleware_1 = require("../middlewares/checkpoint.middleware");
class CheckpointRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const datasource = new infrastructure_1.CheckpointDatasourceImpl();
        const checkpointRepository = new infrastructure_1.CheckpointRepositoryImpl(datasource);
        const controller = new controller_1.CheckpointController(checkpointRepository);
        router.post('/register', controller.registerCheckpoint);
        router.get('/', [checkpoint_middleware_1.CheckpointMiddleware.validateJWT], controller.getCheckpoints);
        return router;
    }
}
exports.CheckpointRoutes = CheckpointRoutes;
