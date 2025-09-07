"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckpointDatasourceImpl = void 0;
const mongodb_1 = require("../../data/mongodb");
const domain_1 = require("../../domain");
const checkpoint_mapper_1 = require("../mappers/checkpoint.mapper");
class CheckpointDatasourceImpl {
    constructor() { }
    register(registerCheckpointDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const { state, comment, location, user, unit } = registerCheckpointDto;
            try {
                const checkpoint = yield mongodb_1.CheckpointModel.create({
                    state,
                    comment,
                    location,
                    user,
                    unit
                });
                yield checkpoint.save();
                return checkpoint_mapper_1.CheckpointMapper.checkpointEntityFromObject(checkpoint);
            }
            catch (error) {
                if (error instanceof domain_1.CustomError) {
                    throw error;
                }
                throw domain_1.CustomError.internalServer();
            }
        });
    }
}
exports.CheckpointDatasourceImpl = CheckpointDatasourceImpl;
