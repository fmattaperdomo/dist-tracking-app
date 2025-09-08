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
        /**
         * Register new unit
         * @openapi
         * /unit/register:
         *    post:
         *      tags:
         *        - unit
         *      summary: "Register unit"
         *      description: Register unit
         *      responses:
         *        '200':
         *          description: Return  the object inserted into the collection.
         *        '422':
         *          description: Validation Error.
         *      requestBody:
         *          content:
         *            application/json:
         *              schema:
         *                 $ref: "#/components/schemas/unit"
         *    responses:
         *      '200':
         *        description: Return  the object inserted into the collection.
         *      '400':
         *        description: Validation Error
         */
        router.post('/register', controller.registerUnit);
        /**
         * Get all units
         * @openapi
         * /unit:
         *    get:
         *      tags:
         *        - unit
         *      summary: "Get all units"
         *      description: Get all units
         *      responses:
         *        '200':
         *          description: Return all units.
         *          content:
         *           application/json:
         *             schema:
         *               type: array
         *               items:
         *                 $ref: '#/components/schemas/unit'
         *        '500':
         *          description: Validation Error..
         */
        router.get('/', controller.getUnits);
        /**
         * Get detail from unit by ID
         * @openapi
         * /unit/{id}:
         *    get:
         *      tags:
         *        - unit
         *      summary: "Detail from unit by ID"
         *      description: Detail from Unit by ID
         *      parameters:
         *      - name: id
         *        in: path
         *        description: unit ID to return
         *        required: true
         *        schema:
         *          type: string
         *      responses:
         *        '200':
         *          description: Return the object from unit.
         *          content:
         *             application/json:
         *               schema:
         *                   $ref: '#/components/schemas/unit'
         *        '400':
         *          description: Validation Error.
         */
        router.get('/:id',controller.getUnitsId);
        return router;
    }
}
exports.UnitRoutes = UnitRoutes;
