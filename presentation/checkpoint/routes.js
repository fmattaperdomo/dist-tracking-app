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
        /**
         * Register new checkpoint
         * @openapi
         * /checkpoint/register:
         *    post:
         *      tags:
         *        - checkpoint
         *      summary: "Register checkpoint"
         *      description: Register checkpoint
         *      responses:
         *        '200':
         *          description: Return  the object inserted into the collection.
         *        '422':
         *          description: Validation Error.
         *      requestBody:
         *          content:
         *            application/json:
         *              schema:
         *                 $ref: "#/components/schemas/checkpoint"
         *    responses:
         *      '200':
         *        description: Return  the object inserted into the collection.
         *      '400':
         *        description: Validation Error
         */
        router.post('/register', controller.registerCheckpoint);
        /**
         * Get all checkpoints
         * @openapi
         * /checkpoint:
         *    get:
         *      tags:
         *        - checkpoint
         *      summary: "Get all checkpoints"
         *      description: Get all checkpoints
         *      responses:
         *        '200':
         *          description: Return all checkpoints.
         *          content:
         *           application/json:
         *             schema:
         *               type: array
         *               items:
         *                 $ref: '#/components/schemas/checkpoint'
         *        '400':
         *          description: Validation Error..
         */
        router.get('/', controller.getCheckpoints);
        /**
         * Get detail from checkpoint by ID
         * @openapi
         * /checkpoint/{id}:
         *    get:
         *      tags:
         *        - checkpoint
         *      summary: "Detail from checkpoint by ID"
         *      description: Detail from checkpoint by ID
         *      parameters:
         *      - name: id
         *        in: path
         *        description: Checkpoint ID to return
         *        required: true
         *        schema:
         *          type: string
         *      responses:
         *        '200':
         *          description: Return the object from checkpoint.
         *          content:
         *             application/json:
         *               schema:
         *                   $ref: '#/components/schemas/checkpoint'
         *        '400':
         *          description: Validation Error.
         */
        router.get('/:id',controller.getCheckpointsId);
        /**
         * Get detail from checkpoint by Unit ID
         * @openapi
         * /checkpoint/unit/{id}:
         *    get:
         *      tags:
         *        - checkpoint
         *      summary: "Detail from checkpoint by Unit ID"
         *      description: Detail from checkpoint by Unit ID
         *      parameters:
         *      - name: id
         *        in: path
         *        description: Checkpoint Unit ID to return
         *        required: true
         *        schema:
         *          type: string
         *      responses:
         *        '200':
         *          description: Return the object from checkpoint.
         *          content:
         *             application/json:
         *               schema:
         *                   $ref: '#/components/schemas/checkpoint'
         *        '400':
         *          description: Validation Error.
         */
        router.get('/unit/:id',controller.getCheckpointsUnit);
        return router;
    }
}
exports.CheckpointRoutes = CheckpointRoutes;
