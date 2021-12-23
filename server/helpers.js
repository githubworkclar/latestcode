"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
/**
* Get the error message from error object
*/
function getErrorMessage(err) {
    let message = '';
    if (err.code) {
        switch (err.code) {
            case 11000:
            case 11001:
                message = getUniqueErrorMessage(err);
                break;
            default:
                message = 'Something went wrong';
        }
    }
    else if (err.message && !err.errors) {
        message = err.message;
    }
    else {
        for (var errName in err.errors) {
            if (err.errors[errName].message) {
                message = err.errors[errName].message;
            }
        }
    }
    return message;
}
exports.getErrorMessage = getErrorMessage;
;
/**
 * Get unique error field name
 */
let getUniqueErrorMessage = function (err) {
    let output;
    try {
        var begin = 0;
        if (err.errmsg.lastIndexOf('.$') !== -1) {
            // support mongodb <= 3.0 (default: MMapv1 engine)
            // "errmsg" : "E11000 duplicate key error index: mean-dev.users.$email_1 dup key: { : \"test@user.com\" }"
            begin = err.errmsg.lastIndexOf('.$') + 2;
        }
        else {
            // support mongodb >= 3.2 (default: WiredTiger engine)
            // "errmsg" : "E11000 duplicate key error collection: mean-dev.users index: email_1 dup key: { : \"test@user.com\" }"
            begin = err.errmsg.lastIndexOf('index: ') + 7;
        }
        var fieldName = err.errmsg.substring(begin, err.errmsg.lastIndexOf('_1'));
        output = fieldName.charAt(0).toUpperCase() + fieldName.slice(1) + ' already exists';
    }
    catch (ex) {
        output = 'Unique field already exists';
    }
    return output;
};
/*convert value to decimal places*/
function convertToDecimal(unit, value) {
    if (constants_1.Units.MILLI_METER === unit) {
        return parseFloat(value.toFixed(2));
    }
    else {
        return parseFloat(value.toFixed(3));
    }
}
exports.convertToDecimal = convertToDecimal;
/* WRrAr convert megapascal (MPa) to bar */
function convertToBar(value) {
    /*1 megapascal (MPa) = 10.00 bars (bar , b)*/
    return parseFloat((value * 10.00).toFixed(2));
}
exports.convertToBar = convertToBar;
// format to 10 power -6
function FormatTenPowerSix(val) {
    return val ? ((val) / 1000000) : 0.000;
}
exports.FormatTenPowerSix = FormatTenPowerSix;
;
//# sourceMappingURL=helpers.js.map