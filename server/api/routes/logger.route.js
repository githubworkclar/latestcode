"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const typedi_1 = require("typedi");
const logger_service_1 = __importDefault(require("../../services/logger.service"));
const celebrate_1 = require("celebrate");
const route = express_1.Router();
exports.default = (app) => {
    app.use('/logger', route);
    route.post('/log', celebrate_1.celebrate({
        body: celebrate_1.Joi.object({
            message: celebrate_1.Joi.string().required(),
            level: celebrate_1.Joi.number().required(),
        }),
    }), async (req, res, next) => {
        const logger = typedi_1.Container.get('logger');
        logger.debug('Calling Log endpoint with body: %o', req.body);
        try {
            const logInputDTO = req.body;
            const loggerServiceInstance = typedi_1.Container.get(logger_service_1.default);
            const configData = await loggerServiceInstance.log(logInputDTO);
            return res.json(configData).status(200);
        }
        catch (e) {
            logger.error('🔥 error: %o', e);
            return next(e);
        }
    });
};
//# sourceMappingURL=logger.route.js.map