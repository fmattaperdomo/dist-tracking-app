"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitRepositoryImpl = void 0;
class UnitRepositoryImpl {
    constructor(unitDatasource) {
        this.unitDatasource = unitDatasource;
    }
    register(registerUnitDto) {
        return this.unitDatasource.register(registerUnitDto);
    }
}
exports.UnitRepositoryImpl = UnitRepositoryImpl;
