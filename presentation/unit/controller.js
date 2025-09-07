"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitController = void 0;
const domain_1 = require("../../domain");
const mongodb_1 = require("../../data/mongodb");
const logger_plugin_1 = require("../plugins/logger.plugin");
class UnitController {
    constructor(unitRepository) {
        this.unitRepository = unitRepository;
        this.logger = (0, logger_plugin_1.buildLogger)(UnitController.name);
        this.handleError = (error, res) => {
            this.logger.error(error);
            this.logger.error(res.json);
            if (error instanceof domain_1.CustomError) {
                return res.status(error.statusCode).json({ error: error.message });
            }
            this.logger.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
        };
        this.registerUnit = (req, res) => {
            const [error, registerUnitDto] = domain_1.RegisterUnitDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            this.logger.log(`Registering unit with data: ${registerUnitDto}`);
            this.logger.error(error);
            new domain_1.RegisterUnit(this.unitRepository)
                .execute(registerUnitDto)
                .then(data => res.json(data))
                .catch(error => this.handleError(error, res));
        };
        this.getUnits = (req, res) => {
            mongodb_1.UnitModel.find()
                .then(units => {
                res.json({
                    unit: req.body.unit
                });
            })
                .catch(() => res.status(500).json({ error: 'Internal server error' }));
        };
    }
}
exports.UnitController = UnitController;
