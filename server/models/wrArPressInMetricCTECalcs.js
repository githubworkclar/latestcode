"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const WrArPressInMetricCTECalcs = new mongoose_1.default.Schema({
    id: Number,
    materialName: String,
    temperatures: [{
            temperature: Number,
            idCTE: Number,
            odCTE: Number,
            oalCTE: Number,
            cxCTE: Number
        }]
});
exports.default = mongoose_1.default.model('wrArPressInMetricCTECalcs', WrArPressInMetricCTECalcs, 'wrArPressInMetricCTECalcs');
//# sourceMappingURL=wrArPressInMetricCTECalcs.js.map