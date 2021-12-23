"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const CalculationIdTolerance = new mongoose_1.default.Schema({
    _id: String,
    crossSectionMin: Number,
    crossSectionMax: Number,
    diameterMin: Number,
    diameterMax: Number,
    diameterTolerance: Number
});
exports.default = mongoose_1.default.model('calculationIdTolerance', CalculationIdTolerance, 'calculationIdTolerance');
//# sourceMappingURL=calculationIdTolerance.js.map