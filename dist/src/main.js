"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const configs_1 = require("../configs");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.listen(configs_1.CONFIGS.PORT, () => {
    console.log(`${configs_1.CONFIGS.APP_NAME} listening on ${configs_1.CONFIGS.PORT}`);
});
