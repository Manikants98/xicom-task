"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var http_1 = __importDefault(require("http"));
var mongo_config_1 = __importDefault(require("./configs/mongo.config"));
var routes_1 = __importDefault(require("./routes"));
var app = (0, express_1.default)();
var port = 4000;
var server = http_1.default.createServer(app);
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use(mongo_config_1.default);
app.use(routes_1.default);
server.listen(port, function () {
    console.log("Server is running on port ".concat(port));
});
