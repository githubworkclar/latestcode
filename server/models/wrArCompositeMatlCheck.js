"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const WrArCompositeMatlCheck = new mongoose_1.default.Schema({
    _id: String,
    matlName: {
        type: String,
        default: ''
    },
    serviceStorageTemperatureAmbientMin: {
        type: Number,
        default: 0
    },
    serviceStorageTemperatureAmbientMax: {
        type: Number,
        default: 0
    },
    temperatures: [
        {
            temperature: {
                type: Number,
                default: ''
            },
            propertyAtTemperature: {
                compressiveModulus: Number,
                compressiveYield: Number
            },
            cteAtTemperature: {
                idCTE: Number,
                odCTE: Number,
                oalCTE: Number
            }
        }
    ]
});
exports.default = mongoose_1.default.model('wrArCompositeMatlCheck', WrArCompositeMatlCheck, 'wrArCompositeMatlCheck');
//# sourceMappingURL=wrArCompositeMatlCheck.js.map