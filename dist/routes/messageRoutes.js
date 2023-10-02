"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const messageController_1 = require("../controllers/messageController");
const validator_1 = require("../middleware/validator");
const routes = express_1.default.Router();
routes.get('/create', messageController_1.message_get_create);
routes.post('/create', (0, validator_1.messageValidation)(), validator_1.validate, messageController_1.message_post_create);
routes.post('/delete', messageController_1.message_delete);
exports.default = routes;
