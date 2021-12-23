"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Units;
(function (Units) {
    Units[Units["INCH"] = 1] = "INCH";
    Units[Units["MILLI_METER"] = 2] = "MILLI_METER";
})(Units = exports.Units || (exports.Units = {}));
var Temperature;
(function (Temperature) {
    Temperature[Temperature["FAHRENHEIT"] = 1] = "FAHRENHEIT";
    Temperature[Temperature["CELCIUS"] = 2] = "CELCIUS";
})(Temperature = exports.Temperature || (exports.Temperature = {}));
var CalculatorOption;
(function (CalculatorOption) {
    CalculatorOption[CalculatorOption["Nominal"] = 1] = "Nominal";
    CalculatorOption[CalculatorOption["WithTolerance"] = 2] = "WithTolerance";
    CalculatorOption[CalculatorOption["WithMinMax"] = 3] = "WithMinMax";
})(CalculatorOption = exports.CalculatorOption || (exports.CalculatorOption = {}));
var ErrorTypes;
(function (ErrorTypes) {
    ErrorTypes[ErrorTypes["Error"] = 1] = "Error";
    ErrorTypes[ErrorTypes["Warning"] = 2] = "Warning";
})(ErrorTypes = exports.ErrorTypes || (exports.ErrorTypes = {}));
var WrArCalcTypes;
(function (WrArCalcTypes) {
    WrArCalcTypes["PressIn"] = "pressIn";
    WrArCalcTypes["Floating"] = "floating";
})(WrArCalcTypes = exports.WrArCalcTypes || (exports.WrArCalcTypes = {}));
exports.customValue = 0;
var CalculatorTypes;
(function (CalculatorTypes) {
    CalculatorTypes[CalculatorTypes["ORingInternalVacuumOnly"] = 1] = "ORingInternalVacuumOnly";
    CalculatorTypes[CalculatorTypes["ORingDovetailGlandVacuumOnly"] = 2] = "ORingDovetailGlandVacuumOnly";
    CalculatorTypes[CalculatorTypes["ORingHalfDovetailGlandInternalVacuumOnly"] = 3] = "ORingHalfDovetailGlandInternalVacuumOnly";
    CalculatorTypes[CalculatorTypes["ORingRectangularGlandExternalVacuumOnly"] = 4] = "ORingRectangularGlandExternalVacuumOnly";
    CalculatorTypes[CalculatorTypes["WrArPressIn"] = 5] = "WrArPressIn";
    CalculatorTypes[CalculatorTypes["WrArFloating"] = 6] = "WrArFloating";
})(CalculatorTypes = exports.CalculatorTypes || (exports.CalculatorTypes = {}));
//# sourceMappingURL=constants.js.map