"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterCheckpointDto = void 0;
const config_1 = require("../../../config");
class RegisterCheckpointDto {
    constructor(state, comment, location, user, unit) {
        this.state = state;
        this.comment = comment;
        this.location = location;
        this.user = user;
        this.unit = unit;
    }
    static create(object) {
        const { state, comment, location, user, unit } = object;
        if (!state)
            return ['Missing state'];
        if (!comment)
            return ['Missing comment'];
        if (comment.length < 6)
            return ['comment too short'];
        if (!location)
            return ['Missing location'];
        if (location.length < 6)
            return ['location too short'];
        if (!user)
            return ['Missing user'];
        if (!config_1.Validators.isMongoID(user))
            return ['Invalid User ID'];
        if (!unit)
            return ['Missing unit ID'];
        if (!config_1.Validators.isMongoID(unit))
            return ['Invalid Unit ID'];
        return [
            undefined,
            new RegisterCheckpointDto(state, comment, location, user, unit)
        ];
    }
}
exports.RegisterCheckpointDto = RegisterCheckpointDto;
