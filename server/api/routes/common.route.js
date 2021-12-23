"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const typedi_1 = require("typedi");
const common_service_1 = __importDefault(require("../../services/common.service"));
const route = express_1.Router();
exports.default = (app) => {
    app.use('/common', route);
    route.get('/materialchoice', async (req, res) => {
        const logger = typedi_1.Container.get('logger');
        logger.info('API [common.route] called.');
        try {
            // service instance
            const oRingGlandServiceInstance = typedi_1.Container.get(common_service_1.default);
            const configData = await oRingGlandServiceInstance.getMaterialChoiceJSON();
            return res.json(configData).status(200);
        }
        catch (e) {
            logger.error('🔥 error: File [common.route]   %o', e);
            throw new Error(e);
        }
    });
};
//# sourceMappingURL=common.route.js.map
