
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata"); // We need this in order to use @Decorators
const config_1 = __importDefault(require("./config"));
const express_1 = __importDefault(require("express")); // load up the express framework 
const logger_1 = __importDefault(require("./loaders/logger"));
const cors_1 = __importDefault(require("cors"));
console.log("test");
async function startServer() {
    console.log("test");
    // create an instance of express to serve our end points
    const app = express_1.default();
    app.use(cors_1.default());
    // angular app set as start
    // app.use(express.static(process.cwd() + "/../dist/NGv09SMS/"));
    // app.get('/', (req, res) => {
    //   res.sendFile(process.cwd() + "/../dist/NGv09SMS/index.html")
    // });
    // angular app set as start
    const path = require('path');
    app.use(express_1.default.static(process.cwd() + '../../'));
    // app.get('/*', (req, res) => res.sendFile(process.cwd() + '../../index.html'));
    const root = path.join(process.cwd(), '../');
    // Send all other requests to the Angular app
    app.get('/', (req, res) => res.sendFile(root + 'index.html'));
    /**
     * A little hack here
     * Import/Export can only be used in 'top-level code'
     * Well, at least in node 10 without babel and at the time of writing
     * So we are using good old require.
     **/
    await require('./loaders').default({ expressApp: app });
    app.listen(config_1.default.port, err => {
        if (err) {
            logger_1.default.error(err);
          // process.exit(1);
            return;
        }
        logger_1.default.info(`
      ################################################
      🛡️  Server listening on port: ${config_1.default.port} 🛡️ 
      ################################################
    `);
    });
}
startServer();
//# sourceMappingURL=app.js.map
