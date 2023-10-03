"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const messageController_1 = __importDefault(require("../controllers/messageController"));
// import { messageValidation, validate } from '../middleware/validator';
const routes = express_1.default.Router();
routes.get('/', messageController_1.default);
// routes.get('/create', message_get_create);
// routes.post('/create', messageValidation(), validate, message_post_create);
// routes.post('/delete', message_delete);
exports.default = routes;
