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
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
const enums_1 = require("../enums");
let LoggerService = class LoggerService {
    constructor(logger) {
        this.logger = logger;
    }
    async log(log) {
        switch (log.level) {
            case enums_1.LoggingLevels.error:
                this.logger.error(log.message);
                break;
            case enums_1.LoggingLevels.warn:
                this.logger.warn(log.message);
                break;
            case enums_1.LoggingLevels.info:
                this.logger.info(log.message);
                break;
            case enums_1.LoggingLevels.verbose:
                this.logger.verbose(log.message);
                break;
            case enums_1.LoggingLevels.debug:
                this.logger.debug(log.message);
                break;
            case enums_1.LoggingLevels.silly:
                this.logger.silly(log.message);
                break;
            default:
                break;
        }
        return log;
    }
};
LoggerService = __decorate([
    typedi_1.Service(),
    __param(0, typedi_1.Inject('logger')),
    __metadata("design:paramtypes", [Object])
], LoggerService);
exports.default = LoggerService;
//# sourceMappingURL=logger.service.js.map