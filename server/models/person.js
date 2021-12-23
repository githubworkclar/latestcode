"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Persons = new mongoose_1.default.Schema({
    fname: {
        type: String,
        required: [true, 'Please enter a full name'],
        index: true,
    },
    lname: {
        type: String,
        lowercase: true,
        index: true,
    },
});
exports.default = mongoose_1.default.model('persons', Persons);
//# sourceMappingURL=person.js.map