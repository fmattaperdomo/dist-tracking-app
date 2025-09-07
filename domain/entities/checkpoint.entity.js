"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckpointEntity = void 0;
class CheckpointEntity {
    constructor(id, state, comment, location, createdAt, user, unit) {
        this.id = id;
        this.state = state;
        this.comment = comment;
        this.location = location;
        this.createdAt = createdAt;
        this.user = user;
        this.unit = unit;
    }
}
exports.CheckpointEntity = CheckpointEntity;
