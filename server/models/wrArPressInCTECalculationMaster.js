"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const WrArPressInCTECalculationMaster = new mongoose_1.default.Schema({
    id: Number,
    materialName: String,
    acGrowth1: {
        fieldType: {
            type: String,
            default: ''
        },
        formula: String
    },
    acGrowth2: {
        fieldType: {
            type: String,
            default: ''
        },
        formula: String
    },
    aeGrowth1: {
        fieldType: {
            type: String,
            default: ''
        },
        formula: {
            type: String,
            default: ''
        }
    },
    aeGrowth2: {
        fieldType: {
            type: String,
            default: ''
        },
        formula: {
            type: String,
            default: ''
        }
    },
    agGrowth1: {
        fieldType: {
            type: String,
            default: ''
        },
        formula: {
            type: String,
            default: ''
        }
    },
    agGrowth2: {
        fieldType: {
            type: String,
            default: ''
        },
        formula: {
            type: String,
            default: ''
        }
    },
    aiGrowth1: {
        fieldType: {
            type: String,
            default: ''
        },
        formula: {
            type: String,
            default: ''
        }
    },
    aiGrowth2: {
        fieldType: {
            type: String,
            default: ''
        },
        formula: {
            type: String,
            default: ''
        }
    }
});
exports.default = mongoose_1.default.model('wrArPressInCTECalculationMaster', WrArPressInCTECalculationMaster, 'wrArPressInCTECalculationMaster');
//# sourceMappingURL=wrArPressInCTECalculationMaster.js.map