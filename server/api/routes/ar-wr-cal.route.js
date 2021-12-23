"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const typedi_1 = require("typedi");
const middlewares_1 = __importDefault(require("../middlewares"));
const ar_wr_cal_service_1 = __importDefault(require("../../services/ar-wr-cal.service"));
const helpers_1 = require("../../helpers");
const constants_1 = require("../../constants");
const route = express_1.Router();
exports.default = (app) => {
    app.use('/wrar', route);
    // get JSON config of Wr/Ar Calculators   get DropDownItems
    route.get('/getdropdownitems', middlewares_1.default.isAuth, async (req, res) => {
        const logger = typedi_1.Container.get('logger');
        logger.info('API [ar-wr-cal.route] called.');
        try {
            const wrArServiceInstance = typedi_1.Container.get(ar_wr_cal_service_1.default);
            const configData = await wrArServiceInstance.getArWrCalcDropDownItems();
            return res.json(configData).status(200);
        }
        catch (e) {
            logger.error('🔥 error: File [ar-wr-cal.route]   %o', e);
            throw new Error(e);
        }
    });
    // get JSON config of Wr/Ar Calculators
    route.get('/getjsonconfig', middlewares_1.default.isAuth, async (req, res) => {
        const logger = typedi_1.Container.get('logger');
        logger.info('API [ar-wr-cal.route] called.');
        try {
            const wrArServiceInstance = typedi_1.Container.get(ar_wr_cal_service_1.default);
            const configData = await wrArServiceInstance.getArWrCalcJSON();
            return res.json(configData).status(200);
        }
        catch (e) {
            logger.error('🔥 error: File [ar-wr-cal.route]   %o', e);
            throw new Error(e);
        }
    });
    route.post('/pressInCalculation', middlewares_1.default.isAuth, async (req, res) => {
        const logger = typedi_1.Container.get('logger');
        try {
            logger.info('API [ar-wr-cal.route] pressInCalculation API called.');
            const wrArServiceInstance = typedi_1.Container.get(ar_wr_cal_service_1.default);
            const output = await wrArServiceInstance.pressInCalculation(req.body);
            return res.json(output).status(200);
        }
        catch (e) {
            logger.error('🔥 error: File [ar-wr-cal.route] API createOring  %o', e);
            return res.status(400).send({ message: helpers_1.getErrorMessage(e) });
        }
    });
    route.post('/floatingCalculation', middlewares_1.default.isAuth, async (req, res) => {
        const logger = typedi_1.Container.get('logger');
        try {
            logger.info('API [ar-wr-cal.route] floatingCalculation API called.');
            const wrArServiceInstance = typedi_1.Container.get(ar_wr_cal_service_1.default);
            const output = await wrArServiceInstance.floatingCalculation(req.body);
            return res.json(output).status(200);
        }
        catch (e) {
            logger.error('🔥 error: File [ar-wr-cal.route] API getInterferenceInt  %o', e);
            return res.status(400).send({ message: helpers_1.getErrorMessage(e) });
        }
    });
    // get standard interference
    route.post('/getInterference', middlewares_1.default.isAuth, async (req, res) => {
        const logger = typedi_1.Container.get('logger');
        try {
            logger.info('API [ar-wr-cal.route] getInterferenceInt API called.');
            const wrArServiceInstance = typedi_1.Container.get(ar_wr_cal_service_1.default);
            const data = req.body;
            const output = await wrArServiceInstance.getInterferenceInt((+data.unit), data.composite, data.interferenceTarget, (data.customInterferenceTarget ? +data.customInterferenceTarget : 0.000), (data.stationaryElementIDMax ? parseFloat(data.stationaryElementIDMax) : 0.000));
            return res.json(output).status(200);
        }
        catch (e) {
            logger.error('🔥 error: File [ar-wr-cal.route] API getInterferenceInt  %o', e);
            return res.status(400).send({ message: helpers_1.getErrorMessage(e) });
        }
    });
    // get standard clearance
    route.post('/getClearance', middlewares_1.default.isAuth, async (req, res) => {
        const logger = typedi_1.Container.get('logger');
        try {
            logger.info('API [ar-wr-cal.route] getClearance API called.');
            const wrArServiceInstance = typedi_1.Container.get(ar_wr_cal_service_1.default);
            const data = req.body;
            const output = await wrArServiceInstance.getClearance((+data.unit), data.pumpType, data.componentType, (data.clearanceTarget ? data.clearanceTarget : 0.000), (data.customClearanceTarget ? +data.customClearanceTarget : 0.000), (data.rotatingElementODMax ? +data.rotatingElementODMax : 0.000), ((+data.calculatorType) === constants_1.CalculatorTypes.WrArFloating ? true : false));
            return res.json(output).status(200);
        }
        catch (e) {
            logger.error('🔥 error: File [ar-wr-cal.route] API getClearance  %o', e);
            return res.status(400).send({ message: helpers_1.getErrorMessage(e) });
        }
    });
    // get rotor or stator CTE material detail
    route.post('/getCTEMaterialDetail', middlewares_1.default.isAuth, async (req, res) => {
        const logger = typedi_1.Container.get('logger');
        try {
            logger.info('API [ar-wr-cal.route] getCTEMaterialDetail API called.');
            const wrArServiceInstance = typedi_1.Container.get(ar_wr_cal_service_1.default);
            const data = req.body;
            const output = await wrArServiceInstance.getMaterialDetail(data.material, (+data.unit));
            return res.json(output).status(200);
        }
        catch (e) {
            logger.error('🔥 error: File [ar-wr-cal.route] API getCTEMaterialDetail  %o', e);
            return res.status(400).send({ message: helpers_1.getErrorMessage(e) });
        }
    });
    // get composite material Mat Check
    route.post('/getMatlCheck', middlewares_1.default.isAuth, async (req, res) => {
        const logger = typedi_1.Container.get('logger');
        try {
            logger.info('API [ar-wr-cal.route] getMatlCheck API called.');
            const wrArServiceInstance = typedi_1.Container.get(ar_wr_cal_service_1.default);
            const data = req.body;
            const output = await wrArServiceInstance.getMatlCheck((+data.unit), data.composite);
            return res.json(output).status(200);
        }
        catch (e) {
            logger.error('🔥 error: File [ar-wr-cal.route] API getMatlCheck  %o', e);
            return res.status(400).send({ message: helpers_1.getErrorMessage(e) });
        }
    });
};
//# sourceMappingURL=ar-wr-cal.route.js.map