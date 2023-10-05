"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.delete_message = exports.create_message = exports.get_all_messages = void 0;
const message_1 = __importDefault(require("../models/message"));
const get_all_messages = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const messages = yield message_1.default.find().sort({
            createdAt: -1,
        });
        res.json(messages);
    }
    catch (err) {
        res.status(500).json('Server error');
    }
});
exports.get_all_messages = get_all_messages;
const create_message = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const message = new message_1.default(req.body);
        yield message.save();
        const messages = yield message_1.default.find().sort({
            createdAt: -1,
        });
        res.json(messages);
    }
    catch (_a) {
        res
            .status(500)
            .json('An internal server error occurred when creating a post, please try again or if the issue persists contact the site admin.');
    }
});
exports.create_message = create_message;
const delete_message = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield message_1.default.findByIdAndDelete(id);
        res.json('Success, message delete');
    }
    catch (_b) {
        res
            .status(500)
            .json('An internal server error occurred when deleting a post, please try again or if the issue persists contact the site admin.');
    }
});
exports.delete_message = delete_message;
