"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const typedi_1 = require("typedi");
const person_1 = __importDefault(require("../../services/person"));
const middlewares_1 = __importDefault(require("../middlewares"));
const route = express_1.Router();
exports.default = (app) => {
    app.use('/person', route);
    // API URL - /api/person
    route.get('/', middlewares_1.default.isAuth, async (req, res) => {
        try {
            // const logger = Container.get('logger');
            const personServiceInstance = typedi_1.Container.get(person_1.default);
            const persons = await personServiceInstance.getAll();
            // const personServiceInstance = Container.get(ORinService);
            // const persons: IOringAndGlandDetails[] = await personServiceInstance.getDashsizeDetails();
            return res.json(persons).status(200);
        }
        catch (e) {
            throw new Error(e);
        }
    });
    route.get('/getPersons', async (req, res) => {
        try {
            // variables
            const dataPath = "data/persons.json";
            const fs = require('fs');
            fs.readFile(dataPath, "utf8", (err, data) => {
                if (err) {
                    throw err;
                }
                res.send(JSON.parse(data));
            });
        }
        catch (error) {
            throw new Error(error);
        }
    });
};
//# sourceMappingURL=person.js.map