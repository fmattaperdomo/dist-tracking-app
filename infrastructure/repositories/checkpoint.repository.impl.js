"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckpointRepositoryImpl = void 0;
class CheckpointRepositoryImpl {
    constructor(checkpointDatasource) {
        this.checkpointDatasource = checkpointDatasource;
    }
    register(registerCheckpointDto) {
        return this.checkpointDatasource.register(registerCheckpointDto);
    }
}
exports.CheckpointRepositoryImpl = CheckpointRepositoryImpl;
