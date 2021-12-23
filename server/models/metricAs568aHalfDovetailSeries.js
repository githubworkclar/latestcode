"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const MetricAs568aHalfDovetailSeries = new mongoose_1.default.Schema({
    _id: mongoose_1.Schema.Types.ObjectId,
    glandName: String,
    as568aSeries: Number,
    oringCrossSectionNominal: Number,
    oringCrossSectionTolerance: Number,
    glandDepthNominal: Number,
    glandDepthTolerance: Number,
    glandWidthNominal: Number,
    glandWidthTolerance: Number,
    glandAngle: Number,
    bottomRadii: Number,
    topRadii: Number
});
exports.default = mongoose_1.default.model('metricAs568aHalfDovetailSeries', MetricAs568aHalfDovetailSeries, 'metricAs568aHalfDovetailSeries');
//# sourceMappingURL=metricAs568aHalfDovetailSeries.js.map