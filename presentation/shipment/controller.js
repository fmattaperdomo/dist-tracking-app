"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShipmentController = void 0;
const domain_1 = require("../../domain");
const mongodb_1 = require("../../data/mongodb");
const logger_plugin_1 = require("../plugins/logger.plugin");
class ShipmentController {
    constructor(shipmentRepository) {
        this.shipmentRepository = shipmentRepository;
        this.logger = (0, logger_plugin_1.buildLogger)(ShipmentController.name);
        this.handleError = (error, res) => {
            if (error instanceof domain_1.CustomError) {
                return res.status(error.statusCode).json({ error: error.message });
            }
            this.logger.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
        };
        this.registerShipment = (req, res) => {
            const [error, registerShipmentDto] = domain_1.RegisterShipmentDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            new domain_1.RegisterShipment(this.shipmentRepository)
                .execute(registerShipmentDto)
                .then(data => res.status(200).json(data))
                .catch(error => this.handleError(error, res));
        };
        this.getShipments = (req, res) => {
            mongodb_1.ShipmentModel.find()
                .then(shipments => {
                res.status(200).json({
                    shipments 
                });
            })
                .catch(() => res.status(500).json({ error: 'Internal server error' }));
        };
        this.getShipmentsId = (req, res) => {
            mongodb_1.ShipmentModel.findById(req.params.id)
                .then(shipments => {
                res.status(200).json({
                    shipments 
                });
            })
                .catch(() => res.status(500).json({ error: 'Internal server error' }));
        };

    }
}
exports.ShipmentController = ShipmentController;
