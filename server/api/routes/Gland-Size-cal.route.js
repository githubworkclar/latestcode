"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// third party imports
const express_1 = require("express");
const typedi_1 = require("typedi");
// application imports
const middlewares_1 = __importDefault(require("../middlewares"));
const Gland_Size_cal_service_1 = __importDefault(require("../../services/Gland-Size-cal.service"));
const helpers_1 = require("../../helpers");
const route = express_1.Router();
exports.default = (app) => {
    app.use('/glandsizecalc', route);
    // get JSON config of O-Ring Calculators
    route.get('/getjsonconfig', middlewares_1.default.isAuth, async (req, res) => {
        const logger = typedi_1.Container.get('logger');
        logger.info('API [Gland-Size-cal.route] called.');
        try {
            const oRingGlandServiceInstance = typedi_1.Container.get(Gland_Size_cal_service_1.default);
            const configData = await oRingGlandServiceInstance.getGlandSizeCalcJSON();
            return res.json(configData).status(200);
        }
        catch (e) {
            logger.error('🔥 error: File [Gland-Size-cal.route]   %o', e);
            throw new Error(e);
        }
    });
    route.post('/createGland', middlewares_1.default.isAuth, async (req, res) => {
        const logger = typedi_1.Container.get('logger');
        try {
            logger.info('API [Gland-Size-cal.route] createGland API called.');
            const glandSizeServiceInstance = typedi_1.Container.get(Gland_Size_cal_service_1.default);
            const output = await glandSizeServiceInstance.createGland(req.body);
            return res.json(output).status(200);
        }
        catch (e) {
            logger.error('🔥 error: File [Gland-Size-cal.route] API createGland  %o', e);
            return res.status(400).send({ message: helpers_1.getErrorMessage(e) });
        }
    });
};
//# sourceMappingURL=Gland-Size-cal.route.js.map