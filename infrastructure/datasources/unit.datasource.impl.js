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
exports.UnitDatasourceImpl = void 0;
const mongodb_1 = require("../../data/mongodb");
const domain_1 = require("../../domain");
const unit_mapper_1 = require("../mappers/unit.mapper");
class UnitDatasourceImpl {
    constructor() { }
    register(registerUnitDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const { description, weight, dimensions, currentStatus, user, shipment } = registerUnitDto;
            try {
                const unit = yield mongodb_1.UnitModel.create({
                    description,
                    weight,
                    dimensions,
                    currentStatus,
                    user,
                    shipment
                });
                yield unit.save();
                return unit_mapper_1.UnitMapper.unitEntityFromObject(unit);
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
exports.UnitDatasourceImpl = UnitDatasourceImpl;
