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
        /**
         * Register new shipment
         * @openapi
         * /shipment/register:
         *    post:
         *      tags:
         *        - shipment
         *      summary: "Register shipment"
         *      description: Register shipment
         *      responses:
         *        '200':
         *          description: Return  the object inserted into the collection.
         *        '422':
         *          description: Validation Error.
         *      requestBody:
         *          content:
         *            application/json:
         *              schema:
         *                 $ref: "#/components/schemas/shipment"
         *    responses:
         *      '200':
         *        description: Return  the object inserted into the collection.
         *      '400':
         *        description: Validation Error
         */
        router.post('/register', controller.registerShipment);
        /**
         * Get all shipments
         * @openapi
         * /shipment:
         *    get:
         *      tags:
         *        - shipment
         *      summary: "Get all shipments"
         *      description: Get all shipments
         *      responses:
         *        '200':
         *          description: Return all shipments.
         *          content:
         *           application/json:
         *             schema:
         *               type: array
         *               items:
         *                 $ref: '#/components/schemas/shipment'
         *        '400':
         *          description: Validation Error..
         */
        router.get('/', controller.getShipments);
        /**
         * Get detail from shipment by ID
         * @openapi
         * /shipment/{id}:
         *    get:
         *      tags:
         *        - shipment
         *      summary: "Detail from shipment by Unit ID"
         *      description: Detail from shipment by Unit ID
         *      parameters:
         *      - name: id
         *        in: path
         *        description: Shipment ID to return
         *        required: true
         *        schema:
         *          type: string
         *      responses:
         *        '200':
         *          description: Return the object from shipment.
         *          content:
         *             application/json:
         *               schema:
         *                   $ref: '#/components/schemas/shipment'
         *        '400':
         *          description: Validation Error.
         */
        router.get('/:id',controller.getShipmentsId);
        return router;
    }
}
exports.ShipmentRoutes = ShipmentRoutes;
