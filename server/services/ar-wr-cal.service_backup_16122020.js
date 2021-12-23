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
Object.defineProperty(exports, "__esModule", { value: true });
// core imports
const typedi_1 = require("typedi");
// third party 
const mathjs = __importStar(require("mathjs"));
// application imports
const constants_1 = require("../constants");
const helpers_1 = require("../helpers");
const { readFile } = require('fs').promises;
const math = mathjs;
/** This function convert degree to radians **/
const rad = (input) => {
    return input * math.pi / 180;
};
let ORingGlandAnalysisService = class ORingGlandAnalysisService {
    constructor(logger, wrArCalculationTypeMaster, wrArMaterial, wrArPressInInterference, wrArCompositeMatlCheck) {
        this.logger = logger;
        this.wrArCalculationTypeMaster = wrArCalculationTypeMaster;
        this.wrArMaterial = wrArMaterial;
        this.wrArPressInInterference = wrArPressInInterference;
        this.wrArCompositeMatlCheck = wrArCompositeMatlCheck;
    }
    // service for getting dropdown items from JSON
    async getArWrCalcDropDownItems() {
        const dataPath = "data/wr-ar-dropdown-items.json";
        const data = await readFile(dataPath, "utf8");
        return new Promise((resolve, reject) => {
            if (data) {
                this.logger.info('[ar-wr-cal.service] function getArWrCalcDropDownItems if condition called.');
                // parse JSON
                let jsonContent = JSON.parse(data);
                return resolve(jsonContent);
            }
            else {
                this.logger.info('[ar-wr-cal.service] function getArWrCalcDropDownItems else condition called.');
                return reject("No data found in json file.");
            }
        });
    }
    // service for getting ORing from JSON
    async getArWrCalcJSON() {
        const dataPath = "data/ar-wr-cal.json";
        const data = await readFile(dataPath, "utf8");
        return new Promise((resolve, reject) => {
            if (data) {
                this.logger.info('[ar-wr-cal.service] if condition called.');
                // parse JSON
                let jsonContent = JSON.parse(data);
                return resolve(jsonContent);
            }
            else {
                this.logger.info('[ar-wr-cal.service] else condition called.');
                return reject("No data found in json file.");
            }
        });
    }
    async pressInCalculation(data) {
        return new Promise((resolve, reject) => {
            this.logger.info('[ar-wr-cal.service] PressIn calculation.' + JSON.stringify(data));
            let output = {};
            let query;
            query = this.wrArCalculationTypeMaster.find({ 'calType': 'pressIn' }).sort('-calType');
            query.exec((err, pressInDetails) => {
                if (err) {
                    throw new Error(helpers_1.getErrorMessage(err));
                }
                else {
                    let rule = [];
                    let warning = [];
                    let k = 0;
                    let i = 0;
                    // // let finalDimensionsMachineCompositeODInch = "", finalDimensionsMachineCompositeODTol = "";
                    // composite data available
                    if (data.composite) {
                        if (data.serviceStorageTemperatureAmbient75FMax > 120) {
                            rule[i] = {
                                'field': 'serviceStorageTemperatureAmbient75FMax',
                                'detail': 'Check Temperature'
                            };
                            i++;
                        }
                        else {
                            // calculate lowTempChange
                            const serviceStorageTemperatureAmbient75FMin = data.serviceStorageTemperatureAmbient75FMin ? data.serviceStorageTemperatureAmbient75FMin : 0.00;
                            // TODO: remove
                            this.logger.info(`serviceStorageTemperatureAmbient75FMin ${serviceStorageTemperatureAmbient75FMin}`);
                            const rotatingElementODMax = data.rotatingElementODMax;
                            const lowTempChange = eval(pressInDetails[0].lowTempChange.formula);
                            // TODO: remove
                            this.logger.info(`lowTempChange ${lowTempChange}`);
                            const highTempChange = eval(pressInDetails[0].highTempChange.formula);
                            // TODO: remove
                            this.logger.info(`highTempChange ${highTempChange}`);
                            // get and set stationaryElementIDMax
                            const stationaryElementIDMax = data.stationaryElementIDMax ? parseFloat(data.stationaryElementIDMax) : 0.00;
                            // TODO: remove
                            this.logger.info(`stationaryElementIDMax ${stationaryElementIDMax}`);
                            // get stator value based on selected "stationary material"
                            let statorCTE = 0.00;
                            let rotorCTE = 0.00;
                            // get material of stationaryMaterial
                            this.getMaterialDetail(data.stationaryMaterial, (+data.unit), (+data.customRotatingMaterial), (+data.customStationaryMaterial)).then((materialResult) => {
                                // this.getStatorCTE(data.stationaryMaterial, (+data.unit), data.customStationaryMaterial).then((statorCTEResult: any) => {
                                statorCTE = materialResult.statorCTE;
                                // TODO: remove
                                this.logger.info(`statorCTE ${statorCTE}`);
                                // calculate statorIDShrinkageAtMinTemp
                                const statorIDShrinkageAtMinTemp = eval(pressInDetails[0].statorIDShrinkageAtMinTemp.formula);
                                // TODO: remove
                                this.logger.info(`statorIDShrinkageAtMinTemp ${statorIDShrinkageAtMinTemp}`);
                                // calculate maxStatorIDAtMinTemp
                                const maxStatorIDAtMinTemp = eval(pressInDetails[0].maxStatorIDAtMinTemp.formula);
                                // TODO: remove
                                this.logger.info(`maxStatorIDAtMinTemp ${maxStatorIDAtMinTemp}`);
                                const statorIDGrowthAtMaxTemp = eval(pressInDetails[0].statorIDGrowthAtMaxTemp.formula);
                                // TODO: remove
                                this.logger.info(`statorIDGrowthAtMaxTemp ${statorIDGrowthAtMaxTemp}`);
                                // get intereference
                                this.getInterferenceInt((+data.unit), data.composite, data.interferenceTarget, data.customInterferenceTarget, stationaryElementIDMax).then((interferenceResult) => {
                                    // check max interference
                                    if (interferenceResult.TargetValue > interferenceResult.Max) {
                                        rule[i] = {
                                            'field': 'interferenceTarget',
                                            'detail': 'Check maximum value of intereference target.'
                                        };
                                        i++;
                                    }
                                    // check min interference
                                    if (interferenceResult.TargetValue > interferenceResult.Min) {
                                        rule[i] = {
                                            'field': 'interferenceTarget',
                                            'detail': 'Check minimum value of intereference target.'
                                        };
                                        i++;
                                    }
                                    const interferenceInt = parseFloat(interferenceResult.TargetValue.toString());
                                    // TODO: remove
                                    this.logger.info(`interferenceInt ${interferenceInt}`);
                                    const minAr1Arht300ODAtMinTemp = eval(pressInDetails[0].minAr1Arht300ODAtMinTemp.formula);
                                    // TODO: remove
                                    this.logger.info(`minAr1Arht300ODAtMinTemp ${minAr1Arht300ODAtMinTemp}`);
                                    // get CTE temperature based on temperature inputted in serviceStorageTemperatureAmbient
                                    this.getCTEAtTemperature((+data.unit), data.composite, data.serviceStorageTemperatureAmbient75FMin).then((cteAtTemperatureResult) => {
                                        if (cteAtTemperatureResult) {
                                            const compositeODCTEAtMinTemp = cteAtTemperatureResult.cteAtTemperature.odCTE;
                                            // TODO: remove
                                            this.logger.info(`compositeODCTEAtMinTemp ${compositeODCTEAtMinTemp}`);
                                            const compositeODShrinkage = eval(pressInDetails[0].compositeODShrinkage.formula);
                                            // TODO: remove
                                            this.logger.info(`compositeODShrinkage ${compositeODShrinkage}`);
                                            const finalOD = output.machineCompositeODInch = eval(pressInDetails[0].finalOD.formula);
                                            // TODO: remove
                                            this.logger.info(`finalOD ${finalOD}`);
                                            output.unit = data.unit;
                                            output.unitTemp = data.unitTemp;
                                            // calculate final dimensions -> Machine Composite OD -> Tol
                                            let odTol = "";
                                            if (finalOD !== null || finalOD !== undefined) {
                                                const odTol = this.getTolValue(finalOD);
                                                if (odTol) {
                                                    output.machineCompositeODTol = odTol;
                                                }
                                                else {
                                                    // check 
                                                    rule[i] = {
                                                        'field': 'machineCompositeODTol',
                                                        'detail': 'Check.'
                                                    };
                                                    i++;
                                                }
                                            }
                                            // get idcte for temperature 75
                                            this.getCTEAtTemperature((+data.unit), data.composite, 75).then((cteAtTemperatureResult) => {
                                                if (cteAtTemperatureResult) {
                                                    const cteAtTemperatureIDCTE = cteAtTemperatureResult.cteAtTemperature.idCTE;
                                                    // TODO: remove
                                                    this.logger.info(`cteAtTemperatureIDCTE ${cteAtTemperatureIDCTE}`);
                                                    const compositeIDGrowth = eval(pressInDetails[0].compositeIDGrowth.formula);
                                                    // TODO: remove
                                                    this.logger.info(`compositeIDGrowth ${compositeIDGrowth}`);
                                                    const cteAtTemperatureODCTE = cteAtTemperatureResult.cteAtTemperature.odCTE;
                                                    // TODO: remove
                                                    this.logger.info(`cteAtTemperatureODCTE ${cteAtTemperatureODCTE}`);
                                                    const compositeODGrowth = eval(pressInDetails[0].compositeODGrowth.formula);
                                                    // TODO: remove
                                                    this.logger.info(`compositeODGrowth ${compositeODGrowth}`);
                                                }
                                                return resolve({ 'data': output });
                                            });
                                        }
                                        else {
                                            let minTemperature = 75, maxTemperature = 500;
                                            if (constants_1.Units.MILLI_METER === (+data.unit)) {
                                                minTemperature = 24;
                                                maxTemperature = 260;
                                            }
                                            rule[i] = {
                                                'field': 'serviceStorageTemperatureAmbient75FMin',
                                                'detail': `Temperature value should be between ${minTemperature} and ${maxTemperature}.`
                                            };
                                            i++;
                                            return resolve({ 'data': output });
                                        }
                                    }, (reject) => {
                                        // on promise reject
                                        throw new Error(reject);
                                    });
                                }, (reject) => {
                                    // on promise reject
                                    throw new Error(reject);
                                });
                            }, (reject) => {
                                // on promise reject
                                throw new Error(reject);
                            });
                        }
                    }
                    else {
                        rule[i] = {
                            'field': 'composite',
                            'detail': `Composite data not available.`
                        };
                        i++;
                        return resolve({ 'data': output });
                    }
                }
            });
        });
    }
    // get interference
    getInterferenceInt(unit, composite, interferenceTarget, customInterferenceTarget, stationaryElementIDMax) {
        const compositePressInIntereferencePromise = new Promise((resolve, reject) => {
            let interference = { TargetValue: 0, Standard: 0, Max: 0, Min: 0 };
            if (!composite) {
                interference.TargetValue = 0.00;
                return resolve(interference);
            }
            else {
                // get from db
                let compositePressInIntereferenceQuery;
                if (constants_1.Units.INCH === (+unit)) {
                    compositePressInIntereferenceQuery = this.wrArPressInInterference.find({ 'key': composite.id }).limit(1);
                }
                else if (constants_1.Units.MILLI_METER === (+unit)) {
                    // TODO: pending to implement
                    // compositePressInIntereferenceQuery = this.wrArPressInInterference.find({ 'key': composite.id }).limit(1);
                }
                else {
                    // consider unit Inch and get data from db
                    compositePressInIntereferenceQuery = this.wrArMaterial.find({ 'key': composite.id }).limit(1);
                }
                // return tolerancence based on crosssection
                compositePressInIntereferenceQuery.exec((err, compositeInterefrence) => {
                    if (err) {
                        throw new Error(helpers_1.getErrorMessage(err));
                    }
                    else {
                        if (compositeInterefrence.length > 0) {
                            // got stator from data from DB
                            const dbInterference = compositeInterefrence[0];
                            // calculate max value
                            interference.Max = eval(dbInterference.max.formula);
                            // calculate standardvalue
                            const calculatedStandard = eval(dbInterference.standard.formula);
                            interference.TargetValue = interference.Standard = (((+calculatedStandard) > (+dbInterference.min.value)) ? (+calculatedStandard) : (+dbInterference.min.value));
                            // if custom option is selected in intereference target DDL then retunr custom intereference
                            if (interferenceTarget && interferenceTarget.value === constants_1.customValue) {
                                // custom value
                                interference.TargetValue = customInterferenceTarget;
                            }
                            return resolve(interference);
                        }
                        else {
                            return reject("Data not found.");
                        }
                    }
                });
            }
        });
        return compositePressInIntereferencePromise;
    }
    // fetch statorCTE value based on selected stationary material
    // private getStatorCTE(stationaryMaterial: any, unit: Units, customStationaryMaterial: number): Promise<any> {
    //     const statorCTEPromise = new Promise<any>((resolve, reject) => {
    //         if (stationaryMaterial) {
    //             if (stationaryMaterial.value === customValue) {
    //                 // custom value
    //                 return resolve({ "statorCTE": customStationaryMaterial ? parseFloat(customStationaryMaterial.toString()) : 0.000 });
    //             }
    //             else {
    //                 // get from db
    //                 let statorQuery: any;
    //                 if (Units.INCH === (+unit)) {
    //                     statorQuery = this.wrArMaterial.find({ 'materialName': stationaryMaterial.label }).limit(1);
    //                 }
    //                 else if (Units.MILLI_METER === (+unit)) {
    //                     // TODO: pending to implement
    //                     // statorQuery = this.metricWrArMaterial.find({ 'materialName': stationaryMaterial.label }).limit(1);
    //                 }
    //                 else {
    //                     // consider unit Inch and get data from db
    //                     statorQuery = this.wrArMaterial.find({ 'materialName': stationaryMaterial.label }).limit(1);
    //                 }
    //                 // execute query
    //                 statorQuery.exec((err, wrArMaterial) => {
    //                     if (err) {
    //                         throw new Error(getErrorMessage(err));
    //                     } else {
    //                         if (wrArMaterial.length > 0) {
    //                             // got stator from data from DB
    //                             const statorCTE = parseFloat(wrArMaterial[0].statorCTE);
    //                             return resolve({ "statorCTE": statorCTE });
    //                         }
    //                         else {
    //                             return reject("Data not found.");
    //                         }
    //                     }
    //                 });
    //             }
    //         }
    //     });
    //     return statorCTEPromise;
    // }
    // fetch statorCTE value based on selected stationary material
    getMaterialDetail(material, unit, customRotorCTE, customStatorCTE) {
        const materialCTEPromise = new Promise((resolve, reject) => {
            if (material) {
                // get from db
                let statorQuery;
                if (constants_1.Units.INCH === (+unit)) {
                    statorQuery = this.wrArMaterial.find({ 'materialName': material.label }).limit(1);
                }
                else if (constants_1.Units.MILLI_METER === (+unit)) {
                    // TODO: pending to implement
                    // statorQuery = this.metricWrArMaterial.find({ 'materialName': material.label }).limit(1);
                }
                else {
                    // consider unit Inch and get data from db
                    statorQuery = this.wrArMaterial.find({ 'materialName': material.label }).limit(1);
                }
                // execute query
                statorQuery.exec((err, wrArMaterial) => {
                    if (err) {
                        throw new Error(helpers_1.getErrorMessage(err));
                    }
                    else {
                        if (wrArMaterial.length > 0) {
                            let materialData = Object.assign({}, wrArMaterial[0]);
                            // check custom value 
                            if (material.value === constants_1.customValue) {
                                materialData.rotorCTE = customRotorCTE;
                                materialData.statorCTE = customStatorCTE;
                            }
                            // got stator from data from DB                            
                            return resolve(materialData);
                        }
                        else {
                            return reject("Data not found.");
                        }
                    }
                });
            }
            else {
                return reject("Invalid data.");
            }
        });
        return materialCTEPromise;
    }
    // get CTEAtTemperature "OD CTE" column value
    getCTEAtTemperature(unit, composite, temperature) {
        const cteAtTemperaturePromise = new Promise((resolve, reject) => {
            let cteAtTemperature = null;
            if (!composite) {
                return resolve(null);
            }
            else {
                if (temperature <= 75) {
                    temperature = 75;
                }
                else if (temperature > 75 && temperature <= 200) {
                    temperature = 200;
                }
                else if (temperature > 200 && temperature <= 250) {
                    temperature = 250;
                }
                else if (temperature > 250 && temperature <= 300) {
                    temperature = 300;
                }
                else if (temperature > 300 && temperature <= 350) {
                    temperature = 350;
                }
                else if (temperature > 350 && temperature <= 400) {
                    temperature = 400;
                }
                else if (temperature > 400 && temperature <= 500) {
                    temperature = 500;
                }
                else {
                    // not  allowed reject promise
                    return resolve(null);
                }
                // get from db
                let wrArCompositeMatlCheckQuery;
                if (constants_1.Units.INCH === (+unit)) {
                    wrArCompositeMatlCheckQuery = this.wrArCompositeMatlCheck.find({ 'matlName': composite.label, 'temperatures': { $elemMatch: { 'temperature': temperature } } }, { 'temperatures.$': 1 });
                }
                else if (constants_1.Units.MILLI_METER === (+unit)) {
                    // TODO: pending to implement
                    // wrArCompositeMatlCheckQuery = this.metricWrArCompositeMatlCheck.find({ 'matlName': composite.label, 'temperatures': { $elemMatch: { 'temperature': temperature } } }, { 'temperatures.$': 1 });
                }
                else {
                    // consider unit Inch and get data from db
                    wrArCompositeMatlCheckQuery = this.wrArCompositeMatlCheck.find({ 'matlName': composite.label, 'temperatures': { $elemMatch: { 'temperature': temperature } } }, { 'temperatures.$': 1 });
                }
                // exexute query
                wrArCompositeMatlCheckQuery.exec((err, wrArMaterialCheck) => {
                    if (err) {
                        throw new Error(helpers_1.getErrorMessage(err));
                    }
                    else {
                        if (wrArMaterialCheck.length > 0) {
                            // got stator from data from DB
                            cteAtTemperature = wrArMaterialCheck[0].temperatures[0];
                            return resolve(cteAtTemperature);
                        }
                        else {
                            return reject("Data not found.");
                        }
                    }
                });
            }
        });
        return cteAtTemperaturePromise;
    }
    // get tol value
    getTolValue(value) {
        if (value < 3) {
            return "+ 0.003";
        }
        else if (value < 6) {
            return "+ 0.004";
        }
        else if (value < 12) {
            return "+ 0.005";
        }
        else {
            return null;
        }
    }
};
ORingGlandAnalysisService = __decorate([
    typedi_1.Service(),
    __param(0, typedi_1.Inject('logger')),
    __param(1, typedi_1.Inject('wrArCalculationTypeMaster')),
    __param(2, typedi_1.Inject('wrArMaterial')),
    __param(3, typedi_1.Inject('wrArPressInInterference')),
    __param(4, typedi_1.Inject('wrArCompositeMatlCheck')),
    __metadata("design:paramtypes", [Object, Object, Object, Object, Object])
], ORingGlandAnalysisService);
exports.default = ORingGlandAnalysisService;
//# sourceMappingURL=ar-wr-cal.service_backup_16122020.js.map