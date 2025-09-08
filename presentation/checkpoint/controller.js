"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckpointController = void 0;
const domain_1 = require("../../domain");
const mongodb_1 = require("../../data/mongodb");
const logger_plugin_1 = require("../plugins/logger.plugin");
class CheckpointController {
    constructor(checkpointRepository) {
        this.checkpointRepository = checkpointRepository;
        this.logger = (0, logger_plugin_1.buildLogger)('CheckpointController');
        this.handleError = (error, res) => {
            if (error instanceof domain_1.CustomError) {
                return res.status(error.statusCode).json({ error: error.message });
            }
            this.logger.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
        };
        this.registerCheckpoint = (req, res) => {
            const [error, registerCheckpointDto] = domain_1.RegisterCheckpointDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            new domain_1.RegisterCheckpoint(this.checkpointRepository)
                .execute(registerCheckpointDto)
                .then(data => res.json(data))
                .catch(error => this.handleError(error, res));
        };
        this.getCheckpoints = (req, res) => {
            mongodb_1.CheckpointModel.find()
                .then(checkpoints => {
                res.status(200).json({
                    checkpoints
                });
            })
                .catch(() => res.status(500).json({ error: 'Internal server error' }));
        };
        this.getCheckpointsId = (req, res) => {
            mongodb_1.CheckpointModel.findById(req.params.id)
                .then(checkpoints => {
                res.status(200).json({
                    checkpoints
                });
            })
                .catch(() => res.status(500).json({ error: 'Internal server error' }));
        };
        this.getCheckpointsUnit = (req, res) => {
            mongodb_1.CheckpointModel.find({unit: req.params.id})
                .then(checkpoints => {
                res.status(200).json({
                    checkpoints
                });
            })
                .catch(() => res.status(500).json({ error: 'Internal server error' }));
        };
    }
}
exports.CheckpointController = CheckpointController;
