"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const messageController_1 = require("../controllers/messageController");
const validator_1 = require("../middleware/validator");
const routes = express_1.default.Router();
routes.get('/', messageController_1.get_all_messages);
routes.post('/', (0, validator_1.messageValidation)(), validator_1.validate, messageController_1.create_message);
// routes.post('/delete', message_delete);
exports.default = routes;
