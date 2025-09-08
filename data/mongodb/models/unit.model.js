"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitModel = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const unitSchema = new mongoose_1.Schema({
    description: {
        type: String,
        trim: true,
        required: [true, 'Please add a description for the unit'],
        maxlength: 100
    },
    weight: {
        type: String,
        trim: true,
        required: [true, 'Please add a weight for the unit'],
        maxlength: 100
    },
    dimensions: {
        type: String,
        trim: true,
        required: [true, 'Please add a dimensions for the unit'],
        maxlength: 100
    },
    currentStatus: {
        type: String,
        required: true,
        default: 'CREATED',
        enum: [
            'CREATED',
            'PICKED UP',
            'IN_TRANSIT',
            'AT_FACILITY',
            'OUT_FOR_DELIVERY',
            'DELIVERED',
            'EXCEPTION'
        ]
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    shipment: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Shipment',
        required: true
    }
});
unitSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret, options) {
        delete ret._id;
    },
});
exports.UnitModel = mongoose_1.default.model('Unit', unitSchema);
