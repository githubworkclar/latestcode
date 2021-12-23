"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const typedi_1 = require("typedi");
const middlewares_1 = __importDefault(require("../middlewares"));
const O_Ring_gland_Analysis_cal_service_1 = __importDefault(require("../../services/O-Ring-gland-Analysis-cal.service"));
const helpers_1 = require("../../helpers");
const route = express_1.Router();
exports.default = (app) => {
    app.use('/oringglandanalysistool', route);
    // get JSON config of O-Ring Calculators
    route.get('/rectangularglandinternalvacuumonly', middlewares_1.default.isAuth, async (req, res) => {
        const logger = typedi_1.Container.get('logger');
        logger.info('API [O-Ring-gland-Analysis-cal.route] called.');
        try {
            const oRingGlandServiceInstance = typedi_1.Container.get(O_Ring_gland_Analysis_cal_service_1.default);
            const configData = await oRingGlandServiceInstance.getORingCalcJSON();
            return res.json(configData).status(200);
        }
        catch (e) {
            logger.error('🔥 error: File [O-Ring-gland-Analysis-cal.route]   %o', e);
            throw new Error(e);
        }
    });
    // get dash size details
    route.post('/dashSizeDetails', middlewares_1.default.isAuth, async (req, res) => {
        const logger = typedi_1.Container.get('logger');
        logger.info('API [O-Ring-gland-Analysis-cal.route] dashSizeDetails API called.');
        try {
            const oRingGlandServiceInstance = typedi_1.Container.get(O_Ring_gland_Analysis_cal_service_1.default);
            const oRingSizes = await oRingGlandServiceInstance.getDashsizeDetails((+req.body.unit));
            // format data
            let finalOutputObject = { data: [] };
            finalOutputObject.data = oRingSizes;
            const properties = ['glandWidthNominal', 'glandWidthTolerance', 'glandWidthMin', 'glandWidthMax', 'glandDepthNominal', 'glandDepthTolerance', 'glandDepthMin', 'glandDepthMax', 'bottomRadiiNominal', 'bottomRadiiTolerance', 'bottomRadiiMin', 'bottomRadiiMax', 'gapNominal', 'gapTolerance', 'gapMin', 'gapMax', 'glandIdNominal', 'glandIdTolerance', 'glandIdMin', 'glandIdMax', 'oringCrossSectionNominal', 'oringCrossSectionMin', 'oringCrossSectionMax', 'oringIdNominal', 'oringIdMin', 'oringIdMax', 'topRadiiNominal', 'topRadiiTolerance', 'topRadiiMin', 'topRadiiMax', 'glandCenterlineNominal', 'glandCenterlineTolerance', 'glandCenterlineMin', 'glandCenterlineMax', 'glandODNominal', 'glandODTolerance', 'glandODMin', 'glandODMax'];
            for (var property in req.body) {
                if (req.body.hasOwnProperty(property) && property != 'data') {
                    if (property != 'rule' && property != 'materialCteN' && property != 'unit' && property != 'unitTemp' && property != 'inputOption' && property != 'materialCteNominal' && property != 'token' && property != 'error' && property != 'warning' && property != 'ctedata' && property != 'calculationType' && property != 'rectangleType') {
                        if ((req.body[property] && properties.indexOf(property) > -1)) {
                            finalOutputObject[property] = parseFloat(req.body[property]).toFixed(req.body.fixedTo);
                            finalOutputObject.operatingTemperatureNominal = parseFloat(req.body.operatingTemperatureNominal);
                            finalOutputObject.glandAngleNominal = parseFloat(req.body.glandAngleNominal);
                            finalOutputObject.glandAngleTolerance = parseFloat(req.body.glandAngleTolerance);
                            finalOutputObject.glandAngleMin = parseFloat(req.body.glandAngleMin);
                            finalOutputObject.glandAngleMax = parseFloat(req.body.glandAngleMax);
                        }
                        else if ((req.body[property] || parseFloat(req.body[property]) === 0) && property != "operatingTemperatureNominal")
                            finalOutputObject[property] = parseFloat(req.body[property]).toFixed(1);
                    }
                    else {
                        if (req.body[property])
                            finalOutputObject[property] = req.body[property];
                    }
                }
            }
            return res.json(finalOutputObject).status(200);
        }
        catch (e) {
            logger.error('🔥 error: File [O-Ring-gland-Analysis-cal.route] API dashSizeDetails  %o', e);
            throw new Error(e);
        }
    });
    route.post('/createoring', middlewares_1.default.isAuth, async (req, res) => {
        const logger = typedi_1.Container.get('logger');
        try {
            logger.info('API [O-Ring-gland-Analysis-cal.route] createOring API called.');
            const oRingGlandServiceInstance = typedi_1.Container.get(O_Ring_gland_Analysis_cal_service_1.default);
            const output = await oRingGlandServiceInstance.createRectangleOring(req.body);
            return res.json(output).status(200);
        }
        catch (e) {
            logger.error('🔥 error: File [O-Ring-gland-Analysis-cal.route] API createOring  %o', e);
            return res.status(400).send({ message: helpers_1.getErrorMessage(e) });
        }
    });
    route.post('/createOringDovetail', middlewares_1.default.isAuth, async (req, res) => {
        const logger = typedi_1.Container.get('logger');
        try {
            logger.info('API [O-Ring-gland-Analysis-cal.route] createOringDovetail API called.');
            const oRingGlandServiceInstance = typedi_1.Container.get(O_Ring_gland_Analysis_cal_service_1.default);
            const output = await oRingGlandServiceInstance.createDovetailOring(req.body);
            return res.json(output).status(200);
        }
        catch (e) {
            logger.error('🔥 error: File [O-Ring-gland-Analysis-cal.route] API createOringDovetail  %o', e);
            return res.status(400).send({ message: helpers_1.getErrorMessage(e) });
        }
    });
    route.post('/createOringHalfDovetail', middlewares_1.default.isAuth, async (req, res) => {
        const logger = typedi_1.Container.get('logger');
        try {
            logger.info('API [O-Ring-gland-Analysis-cal.route] createOringHalfDovetail API called.');
            const oRingGlandServiceInstance = typedi_1.Container.get(O_Ring_gland_Analysis_cal_service_1.default);
            const output = await oRingGlandServiceInstance.createHalfDovetailOringInternalVacuumOnly(req.body);
            return res.json(output).status(200);
        }
        catch (e) {
            logger.error('🔥 error: File [O-Ring-gland-Analysis-cal.route] API createOringHalfDovetail  %o', e);
            return res.status(400).send({ message: helpers_1.getErrorMessage(e) });
        }
    });
};
//# sourceMappingURL=O-Ring-gland-Analysis-cal.route.js.map