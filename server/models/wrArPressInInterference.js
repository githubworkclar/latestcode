"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const WrArPressInInterference = new mongoose_1.default.Schema({
    key: Number,
    name: {
        type: String,
        default: ''
    },
    min: {
        fieldType: {
            type: String,
            default: ''
        },
        value: {
            type: Number,
            default: ''
        }
    },
    metricMin: {
        fieldType: {
            type: String,
            default: ''
        },
        value: {
            type: Number,
            default: ''
        }
    },
    max: {
        fieldType: {
            type: String,
            default: ''
        },
        formula: {
            type: String,
            default: ''
        }
    },
    standard: {
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
exports.default = mongoose_1.default.model('wrArPressInInterference', WrArPressInInterference, 'wrArPressInInterference');
//# sourceMappingURL=wrArPressInInterference.js.map