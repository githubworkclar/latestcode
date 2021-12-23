"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const OringAndGlandDetails = new mongoose_1.default.Schema({
    _id: {
        type: String
    },
    dashSize: {
        type: Number
    },
    oringCrossSectionSize: {
        type: Number
    },
    oringCrossSectionTolerance: {
        type: Number
    },
    oringDiameterSize: {
        type: Number
    },
    oringDiameterTolerance: {
        type: Number
    },
    internalVacuumGlandIdSize: {
        type: Number
    },
    internalVacuumGlandIdTolerance: {
        type: Number
    },
    internalPressureGlandIdSize: {
        type: Number
    },
    internalPressureGlandIdTolerance: {
        type: Number
    },
    dovetailGlandClDiameterSize: {
        type: Number
    },
    dovetailGlandClDiameterTolerance: {
        type: Number
    }
});
exports.default = mongoose_1.default.model('oringAndGlandDetails', OringAndGlandDetails, 'oringAndGlandDetails');
//# sourceMappingURL=oringAndGlandDetails.js.map