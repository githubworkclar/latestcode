"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const typedi_1 = require("typedi");
const logger_1 = __importDefault(require("../../loaders/logger"));
const auth_1 = __importDefault(require("../../services/auth"));
const route = express_1.Router();
exports.default = (app) => {
    app.use('/auth', route);
    route.get('', async (req, res, next) => {
        const logger = typedi_1.Container.get('logger');
        logger.info('Calling auth endpoint with body: %o', req.body);
        try {
            const authServiceInstance = typedi_1.Container.get(auth_1.default);
            const { token } = await authServiceInstance.Auth();
            return res.status(201).json({ token });
        }
        catch (e) {
            logger_1.default.error('🔥 error: %o', e);
            return next(e);
        }
    });
};
//# sourceMappingURL=auth.js.map
