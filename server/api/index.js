"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = __importDefault(require("./routes/auth"));
const agendash_1 = __importDefault(require("./routes/agendash"));
const person_1 = __importDefault(require("./routes/person"));
const logger_route_1 = __importDefault(require("./routes/logger.route"));
const common_route_1 = __importDefault(require("./routes/common.route"));
const O_Ring_gland_Analysis_cal_route_1 = __importDefault(require("./routes/O-Ring-gland-Analysis-cal.route"));
const Gland_Size_cal_route_1 = __importDefault(require("./routes/Gland-Size-cal.route"));
const ar_wr_cal_route_1 = __importDefault(require("./routes/ar-wr-cal.route"));
// guaranteed to get dependencies
exports.default = () => {
    // app routes
    const app = express_1.Router();
    logger_route_1.default(app);
    auth_1.default(app);
    agendash_1.default(app);
    person_1.default(app);
    common_route_1.default(app);
    O_Ring_gland_Analysis_cal_route_1.default(app);
    Gland_Size_cal_route_1.default(app);
    ar_wr_cal_route_1.default(app);
    return app;
};
//# sourceMappingURL=index.js.map