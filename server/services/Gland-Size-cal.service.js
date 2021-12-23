"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// core imports
const typedi_1 = __importStar(require("typedi"));
// third party 
const mathjs = __importStar(require("mathjs"));
const fs = __importStar(require("fs"));
// application imports
const constants_1 = require("../constants");
const helpers_1 = require("../helpers");
const O_Ring_gland_Analysis_cal_service_1 = __importDefault(require("./O-Ring-gland-Analysis-cal.service"));
const math = mathjs;
/** This function convert degree to radians **/
const rad = (input) => {
    return input * math.pi / 180;
};
let GlandSizeCalcService = class GlandSizeCalcService {
    constructor(oRingSizesModel, metricORingSizesModel, as568aRectangleSeriesModel, as568aDovetailSeriesModel, as568aHalfDovetailSeriesModel, metricAs568aRectangleSeriesModel, metricAs568aDovetailSeriesModel, metricAs568aHalfDovetailSeriesModel, logger) {
        this.oRingSizesModel = oRingSizesModel;
        this.metricORingSizesModel = metricORingSizesModel;
        this.as568aRectangleSeriesModel = as568aRectangleSeriesModel;
        this.as568aDovetailSeriesModel = as568aDovetailSeriesModel;
        this.as568aHalfDovetailSeriesModel = as568aHalfDovetailSeriesModel;
        this.metricAs568aRectangleSeriesModel = metricAs568aRectangleSeriesModel;
        this.metricAs568aDovetailSeriesModel = metricAs568aDovetailSeriesModel;
        this.metricAs568aHalfDovetailSeriesModel = metricAs568aHalfDovetailSeriesModel;
        this.logger = logger;
    }
    // service for getting GlandSize JSON
    async getGlandSizeCalcJSON() {
        const dataPath = "data/Gland-Size-Calculator.json";
        const data = await fs.promises.readFile(dataPath, "utf8");
        return new Promise((resolve, reject) => {
            if (data) {
                this.logger.info('[Gland-Size-cal.service] if condition called.');
                // parse JSON
                let jsonContent = JSON.parse(data);
                return resolve(jsonContent);
            }
            else {
                this.logger.info('[Gland-Size-cal.service] else condition called.');
                return reject("No data found in json file.");
            }
        });
    }
    // createGland
    async createGland(data) {
        return new Promise((resolve, reject) => {
            let dashSize = data.dashSize;
            let unit = data.unit;
            let result;
            let output = {};
            output.operatingTemperatureNominal = data.operatingTemperatureNominal;
            output.ctedata = data.ctedata;
            output.materialCteNominal = data.materialCteNominal;
            output.unit = data.unit;
            output.unitTemp = data.unitTemp;
            output.gapNominal = data.gapNominal;
            output.gapMin = data.gapMin;
            output.gapMax = data.gapMax;
            output.oringCrossSectionNominal = data.oringCrossSectionNominal;
            output.oringIdNominal = data.oringIdNominal;
            let glandType = 'rectangle';
            if (data.glandType == 'dovetail') {
                glandType = 'dovetail';
            }
            if (data.glandType == 'halfDovetail') {
                glandType = 'halfDovetail';
            }
            this.getSeriesForCustomSizes(data).then((response) => {
                // on resolve
                let series = response.series;
                this.getGlandDetailsAccordingToDashSize(data.unit, data, glandType, series).then((calculatedData) => {
                    // on promise resolve
                    if (calculatedData !== null) {
                        return resolve({ 'data': calculatedData.data });
                    }
                    else {
                        output.error = "ERRS";
                        return resolve({ 'data': output });
                    }
                });
            }, (rejected) => {
                // on reject
                this.logger.error('🔥 error: File [Gland-Size-cal.service]   %o', rejected.data);
                throw new Error(helpers_1.getErrorMessage(rejected));
            });
        });
    }
    async getSeriesForCustomSizes(req) {
        return new Promise((resolve, reject) => {
            let fixedTo = 2;
            let query;
            if (constants_1.Units.INCH === (+req.unit)) {
                fixedTo = 3;
            }
            else {
                fixedTo = 2;
            }
            let fixedCompression = parseFloat((20 / 100).toString());
            let unit = req.unit;
            let glandDepthNominal = -((parseFloat(req.oringCrossSectionNominal) * parseFloat(fixedCompression.toString())) - parseFloat(req.oringCrossSectionNominal)) - parseFloat(req.gapNominal);
            glandDepthNominal = (+glandDepthNominal.toFixed(fixedTo));
            if (constants_1.Units.INCH === (+unit)) {
                query = this.as568aRectangleSeriesModel.find({ 'glandDepthNominal': { $gte: glandDepthNominal } }).sort({ "glandDepthNominal": 1 }).limit(1);
                if (req.glandType == 'dovetail') {
                    query = this.as568aDovetailSeriesModel.find({ 'glandDepthNominal': { $gte: glandDepthNominal } }).sort({ "glandDepthNominal": 1 }).limit(1);
                }
                if (req.glandType == 'halfDovetail') {
                    query = this.as568aHalfDovetailSeriesModel.find({ 'glandDepthNominal': { $gte: glandDepthNominal } }).sort({ "glandDepthNominal": 1 }).limit(1);
                }
            }
            if (constants_1.Units.MILLI_METER === (+unit)) {
                query = this.metricAs568aRectangleSeriesModel.find({ 'glandDepthNominal': { $gte: glandDepthNominal } }).sort({ "glandDepthNominal": 1 }).limit(1);
                if (req.glandType == 'dovetail') {
                    query = this.metricAs568aDovetailSeriesModel.find({ 'glandDepthNominal': { $gte: glandDepthNominal } }).sort({ "glandDepthNominal": 1 }).limit(1);
                }
                if (req.glandType == 'halfDovetail') {
                    query = this.metricAs568aHalfDovetailSeriesModel.find({ 'glandDepthNominal': { $gte: glandDepthNominal } }).sort({ "glandDepthNominal": 1 }).limit(1);
                }
            }
            query.exec((err, data) => {
                if (data.length > 0) {
                    let series = data[0].as568aSeries;
                    return resolve({ 'series': series });
                }
                else {
                    return reject({ 'data': "Can not Find Series for Selected Details" });
                }
            });
        });
    }
    async getGlandDetailsAccordingToDashSize(unit, req, glandType, series) {
        return new Promise((resolve, reject) => {
            let index = 0, inputValues = {};
            let arrInput = [];
            if (glandType === 'rectangle') {
                let query;
                if (constants_1.Units.INCH === (+unit)) {
                    query = this.as568aRectangleSeriesModel.find().sort({ "glandDepthNominal": 1 });
                }
                if (constants_1.Units.MILLI_METER === (+unit)) {
                    query = this.metricAs568aRectangleSeriesModel.find().sort({ "glandDepthNominal": 1 });
                }
                query.exec((err, cursor) => {
                    if (err) {
                        this.logger.error('🔥 error: File [Gland-Size-cal.service]   %o', err);
                        throw new Error(helpers_1.getErrorMessage(err));
                    }
                    else {
                        let count = cursor.length;
                        this.iterate(index, cursor, req, series, unit).then((rectangleOutput) => {
                            return resolve({ 'data': rectangleOutput });
                        });
                    }
                });
            }
            if (glandType === 'dovetail') {
                let query;
                if (constants_1.Units.INCH === (+unit)) {
                    query = this.as568aDovetailSeriesModel.find().sort({ "glandDepthNominal": 1 });
                }
                if (constants_1.Units.MILLI_METER === (+unit)) {
                    query = this.metricAs568aDovetailSeriesModel.find().sort({ "glandDepthNominal": 1 });
                }
                query.exec((err, cursor) => {
                    if (err) {
                        this.logger.error('🔥 error: File [Gland-Size-cal.service]   %o', err);
                        throw new Error(helpers_1.getErrorMessage(err));
                    }
                    else {
                        let count = cursor.length;
                        this.iterateDovetail(index, cursor, req, series, unit).then((dovetailOutput) => {
                            return resolve({ 'data': dovetailOutput });
                        });
                    }
                });
            }
            if (glandType === 'halfDovetail') {
                let query;
                if (constants_1.Units.INCH === (+unit)) {
                    query = this.as568aHalfDovetailSeriesModel.find().sort({ "glandDepthNominal": 1 });
                }
                if (constants_1.Units.MILLI_METER === (+unit)) {
                    query = this.metricAs568aHalfDovetailSeriesModel.find().sort({ "glandDepthNominal": 1 });
                }
                query.exec((err, cursor) => {
                    if (err) {
                        this.logger.error('🔥 error: File [Gland-Size-cal.service]   %o', err);
                        throw new Error(helpers_1.getErrorMessage(err));
                    }
                    else {
                        let count = cursor.length;
                        this.iterateDovetail(index, cursor, req, series, unit).then((dovetailOutput) => {
                            return resolve({ 'data': dovetailOutput });
                        });
                    }
                });
            }
        });
    }
    /*
    * This function iterate throught details of series record to find optimum
    * Output for gland calculation
    */
    async iterate(index, cursor, req, series, unit) {
        return new Promise((resolve, reject) => {
            let inputValues = {};
            let fixedTo = 2;
            let query;
            if (constants_1.Units.INCH === (+unit)) {
                fixedTo = 3;
            }
            else {
                fixedTo = 2;
            }
            inputValues.glandWidthNominal = parseFloat(cursor[index].glandWidthNominal.toFixed(fixedTo));
            inputValues.glandWidthMin = parseFloat(cursor[index].glandWidthNominal.toFixed(fixedTo)) - parseFloat(cursor[index].glandWidthTolerance.toFixed(fixedTo));
            inputValues.glandWidthMax = parseFloat(cursor[index].glandWidthNominal.toFixed(fixedTo)) + parseFloat(cursor[index].glandWidthTolerance.toFixed(fixedTo));
            inputValues.glandDepthNominal = parseFloat(cursor[index].glandDepthNominal.toFixed(fixedTo));
            inputValues.glandDepthMin = parseFloat(cursor[index].glandDepthNominal.toFixed(fixedTo)) - parseFloat(cursor[index].glandDepthTolerance.toFixed(fixedTo));
            inputValues.glandDepthMax = parseFloat(cursor[index].glandDepthNominal.toFixed(fixedTo)) + parseFloat(cursor[index].glandDepthTolerance.toFixed(fixedTo));
            inputValues.bottomRadiiNominal = parseFloat(cursor[index].bottomRadii.toFixed(fixedTo));
            inputValues.bottomRadiiMin = parseFloat(cursor[index].bottomRadii.toFixed(fixedTo));
            inputValues.bottomRadiiMax = parseFloat(cursor[index].bottomRadii.toFixed(fixedTo));
            inputValues.oringCrossSectionNominal = parseFloat(req.oringCrossSectionNominal);
            inputValues.oringIdNominal = parseFloat(req.oringIdNominal.toString());
            inputValues.gapNominal = parseFloat(req.gapNominal);
            inputValues.gapMin = parseFloat(req.gapMin);
            inputValues.gapMax = parseFloat(req.gapMax);
            inputValues.operatingTemperatureNominal = req.operatingTemperatureNominal;
            inputValues.ctedata = req.ctedata;
            inputValues.materialCteNominal = req.materialCteNominal;
            inputValues.unit = unit;
            inputValues.unitTemp = req.unitTemp;
            inputValues.inputOption = constants_1.CalculatorOption.WithMinMax;
            inputValues.calculationType = 'glandSizing';
            if (req.rectangleType) {
                inputValues.rectangleType = "rectangleOD";
            }
            let rectangleType = "";
            if (req.rectangleType) {
                rectangleType = "rectangleOD";
            }
            this.getGlandIdTolerance(unit, rectangleType, series).then((resp) => {
                // on promise resolve
                let glandTolerance = resp.tolerance;
                if (req.rectangleType) {
                    inputValues.glandODNominal = parseFloat(req.oringIdNominal) + (2 * parseFloat(req.oringCrossSectionNominal)); //parseFloat((req.oringIdNominal*(0/100)))+parseFloat(req.oringIdNominal);		
                    inputValues.glandODNominal = inputValues.glandODNominal.toFixed(fixedTo);
                    inputValues.glandODMin = parseFloat(inputValues.glandODNominal) - parseFloat(glandTolerance);
                    inputValues.glandODMin = inputValues.glandODMin.toFixed(fixedTo);
                    inputValues.glandODMax = parseFloat(inputValues.glandODNominal) + parseFloat(glandTolerance);
                    inputValues.glandODMax = inputValues.glandODMax.toFixed(fixedTo);
                }
                else {
                    inputValues.glandIdNominal = parseFloat((parseFloat(req.oringIdNominal) * (1.5 / 100)).toString()) + parseFloat(req.oringIdNominal);
                    inputValues.glandIdNominal = inputValues.glandIdNominal.toFixed(fixedTo);
                    inputValues.glandIdMin = parseFloat(inputValues.glandIdNominal) - parseFloat(glandTolerance);
                    inputValues.glandIdMin = inputValues.glandIdMin.toFixed(fixedTo);
                    inputValues.glandIdMax = parseFloat(inputValues.glandIdNominal) + parseFloat(glandTolerance);
                    inputValues.glandIdMax = inputValues.glandIdMax.toFixed(fixedTo);
                }
                const oRingGlandServiceInstance = typedi_1.default.get(O_Ring_gland_Analysis_cal_service_1.default);
                oRingGlandServiceInstance.createRectangleOring(inputValues).then((rectangleOutput) => {
                    if (!rectangleOutput.data.error || this.isError(rectangleOutput.data.error) === false) {
                        index = index + 1;
                        resolve(rectangleOutput.data);
                        return;
                    }
                    else {
                        index = index + 1;
                        if (index === cursor.length) {
                            resolve(rectangleOutput.data);
                            return;
                        }
                        // recursive call
                        this.iterate(index, cursor, req, series, unit).then(resolve);
                    }
                });
            });
        });
    }
    /*
    * This function iterate throught details of series record to find optimum
    * Output for gland calculation of dovetail
    */
    async iterateDovetail(index, cursor, req, series, unit) {
        return new Promise((resolve, reject) => {
            let inputValues = {};
            let fixedTo = 2;
            let query;
            if (constants_1.Units.INCH === (+unit)) {
                fixedTo = 3;
                if (req.dashSize) {
                    query = this.oRingSizesModel.find({ dashSize: req.dashSize }).limit(1);
                }
            }
            else {
                fixedTo = 2;
                if (req.dashSize) {
                    query = this.metricORingSizesModel.find({ dashSize: req.dashSize }).limit(1);
                }
            }
            inputValues.glandWidthNominal = parseFloat(cursor[index].glandWidthNominal.toFixed(fixedTo));
            inputValues.glandWidthMin = parseFloat(cursor[index].glandWidthNominal.toFixed(fixedTo)) - parseFloat(cursor[index].glandWidthTolerance.toFixed(fixedTo));
            inputValues.glandWidthMax = parseFloat(cursor[index].glandWidthNominal.toFixed(fixedTo)) + parseFloat(cursor[index].glandWidthTolerance.toFixed(fixedTo));
            inputValues.glandDepthNominal = parseFloat(cursor[index].glandDepthNominal.toFixed(fixedTo));
            inputValues.glandDepthMin = parseFloat(cursor[index].glandDepthNominal.toFixed(fixedTo)) - parseFloat(cursor[index].glandDepthTolerance.toFixed(fixedTo));
            inputValues.glandDepthMax = parseFloat(cursor[index].glandDepthNominal.toFixed(fixedTo)) + parseFloat(cursor[index].glandDepthTolerance.toFixed(fixedTo));
            inputValues.bottomRadiiNominal = inputValues.bottomRadiiMin = inputValues.bottomRadiiMax = parseFloat(cursor[index].bottomRadii.toFixed(fixedTo));
            inputValues.topRadiiNominal = inputValues.topRadiiMin = inputValues.topRadiiMax = parseFloat(cursor[index].topRadii.toFixed(fixedTo));
            inputValues.glandAngleNominal = inputValues.glandAngleMin = inputValues.glandAngleMax = parseFloat(cursor[index].glandAngle);
            inputValues.oringCrossSectionNominal = parseFloat(req.oringCrossSectionNominal);
            inputValues.oringIdNominal = parseFloat(req.oringIdNominal);
            inputValues.gapNominal = parseFloat(req.gapNominal);
            inputValues.gapMin = parseFloat(req.gapMin);
            inputValues.gapMax = parseFloat(req.gapMax);
            inputValues.dashSize = req.dashSize;
            inputValues.operatingTemperatureNominal = req.operatingTemperatureNominal;
            inputValues.ctedata = req.ctedata;
            inputValues.materialCteNominal = req.materialCteNominal;
            inputValues.unit = req.unit;
            inputValues.unitTemp = req.unitTemp;
            inputValues.inputOption = constants_1.CalculatorOption.WithMinMax;
            inputValues.calculationType = 'glandSizing';
            inputValues.token = req.token;
            // get gland centerline tolerance
            this.getGlandCenterlineTolerance(series, unit).then((tolerance) => {
                let glandTolerance = tolerance.tolerance;
                let interCalculation = parseFloat(req.oringCrossSectionNominal) + parseFloat(req.oringIdNominal);
                inputValues.glandCenterlineNominal = (1.5 / 100 * interCalculation) + interCalculation;
                inputValues.glandCenterlineNominal = inputValues.glandCenterlineNominal.toFixed(fixedTo);
                inputValues.glandCenterlineMin = parseFloat(inputValues.glandCenterlineNominal) - parseFloat(glandTolerance);
                inputValues.glandCenterlineMin = inputValues.glandCenterlineMin.toFixed(fixedTo);
                inputValues.glandCenterlineMax = parseFloat(inputValues.glandCenterlineNominal) + parseFloat(glandTolerance);
                inputValues.glandCenterlineMax = inputValues.glandCenterlineMax.toFixed(fixedTo);
                if (req.glandType == "dovetail") {
                    const oRingGlandServiceInstance = typedi_1.default.get(O_Ring_gland_Analysis_cal_service_1.default);
                    oRingGlandServiceInstance.createDovetailOring(inputValues).then((dovetailOutput) => {
                        if (!dovetailOutput.data.error || this.isError(dovetailOutput.data.error) === false) {
                            index = index + 1;
                            resolve(dovetailOutput.data);
                            return;
                        }
                        else {
                            index = index + 1;
                            if (index === cursor.length) {
                                resolve(dovetailOutput.data);
                                return;
                            }
                            // recursive call
                            this.iterateDovetail(index, cursor, req, series, unit).then(resolve);
                        }
                    });
                }
                else {
                    // gland size half dovetail internal vacuum only
                    const oRingGlandServiceInstance = typedi_1.default.get(O_Ring_gland_Analysis_cal_service_1.default);
                    oRingGlandServiceInstance.createHalfDovetailOringInternalVacuumOnly(inputValues).then((dovetailOutput) => {
                        if (!dovetailOutput.data.error || this.isError(dovetailOutput.data.error) === false) {
                            index = index + 1;
                            resolve(dovetailOutput.data);
                            return;
                        }
                        else {
                            index = index + 1;
                            if (index === cursor.length) {
                                resolve(dovetailOutput.data);
                                return;
                            }
                            // recursive call
                            this.iterateDovetail(index, cursor, req, series, unit).then(resolve);
                        }
                    });
                }
            });
        });
    }
    /*
    * This function is used to get gland id tolerance according to dash size by comparing series
    *
    */
    async getGlandIdTolerance(unit, rectangleType, series) {
        return new Promise((resolve, reject) => {
            series = series * -1;
            let query;
            if (constants_1.Units.INCH === (+unit)) {
                query = this.oRingSizesModel.find({ dashSize: { $lte: series } }).limit(1);
            }
            if (constants_1.Units.MILLI_METER === (+unit)) {
                query = this.metricORingSizesModel.find({ dashSize: { $lte: series } }).limit(1);
            }
            query.exec((err, data) => {
                if (err) {
                    this.logger.error('🔥 error: File [Gland-Size-cal.service]   %o', err);
                    throw new Error(helpers_1.getErrorMessage(err));
                }
                else {
                    if (rectangleType === "rectangleOD") {
                        return resolve({ 'tolerance': data[0].internalPressureGlandIdTolerance });
                    }
                    else {
                        return resolve({ 'tolerance': data[0].internalVacuumGlandIdTolerance });
                    }
                }
            });
        });
    }
    /*
    * This function is used to get gland Centerline tolerance according to dash size by comparing series
    *
    */
    async getGlandCenterlineTolerance(series, unit) {
        return new Promise((resolve, reject) => {
            series = series * -1;
            let query;
            if (constants_1.Units.INCH === (+unit)) {
                query = this.oRingSizesModel.find({ dashSize: { $lte: series } }).limit(1);
            }
            if (constants_1.Units.MILLI_METER === (+unit)) {
                query = this.metricORingSizesModel.find({ dashSize: { $lte: series } }).limit(1);
            }
            query.exec((err, data) => {
                if (err) {
                    this.logger.error('🔥 error: File [Gland-Size-cal.service]   %o', err);
                    throw new Error(helpers_1.getErrorMessage(err));
                }
                else {
                    return resolve({ 'tolerance': data[0].dovetailGlandClDiameterTolerance });
                }
            });
        });
    }
    /*
    * This function take field name in form
    * and check this field available in error array
    * according to return true or false
    */
    isError(errorArr) {
        let fieldArray = ['compressionAtTempNominal', 'compressionAtTempMin', 'compressionAtTempMax', 'glandFillAtTempNominal', 'glandFillAtTempMin', 'glandFillAtTempMax'];
        if (errorArr.length > 0) {
            for (let j = 0; j < errorArr.length; j++) {
                if (fieldArray.indexOf(errorArr[j].field) > -1)
                    return true;
            }
            return false;
        }
        return false;
    }
};
GlandSizeCalcService = __decorate([
    typedi_1.Service(),
    __param(0, typedi_1.Inject('oringAndGlandDetailsModel')),
    __param(1, typedi_1.Inject('metricORingAndGlandDetailsModel')),
    __param(2, typedi_1.Inject('as568aRectangleSeriesModel')),
    __param(3, typedi_1.Inject('as568aDovetailSeriesModel')),
    __param(4, typedi_1.Inject('as568aHalfDovetailSeriesModel')),
    __param(5, typedi_1.Inject('metricAs568aRectangleSeriesModel')),
    __param(6, typedi_1.Inject('metricAs568aDovetailSeriesModel')),
    __param(7, typedi_1.Inject('metricAs568aHalfDovetailSeriesModel')),
    __param(8, typedi_1.Inject('logger')),
    __metadata("design:paramtypes", [Object, Object, Object, Object, Object, Object, Object, Object, Object])
], GlandSizeCalcService);
exports.default = GlandSizeCalcService;
//# sourceMappingURL=Gland-Size-cal.service.js.map