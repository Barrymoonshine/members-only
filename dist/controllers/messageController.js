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
exports.message_delete = exports.message_post_create = exports.message_get_create = void 0;
const message_js_1 = __importDefault(require("../models/message.js"));
const message_get_create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.render('message/create', {
            script: 'create',
            style: 'create',
            user: req.user,
        });
    }
    catch (_a) {
        res
            .status(500)
            .json('An internal server error occurred, please try again or if the issue persists contact the site admin.');
    }
});
exports.message_get_create = message_get_create;
const message_post_create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const message = new message_js_1.default(req.body);
        yield message.save();
        res.json({ redirect: '/' });
    }
    catch (_b) {
        res
            .status(500)
            .json('An internal server error occurred when creating a post, please try again or if the issue persists contact the site admin.');
    }
});
exports.message_post_create = message_post_create;
const message_delete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield message_js_1.default.findByIdAndDelete(req.body._id);
        res.json({ redirect: '/' });
    }
    catch (_c) {
        res
            .status(500)
            .json('An internal server error occurred when deleting a post, please try again or if the issue persists contact the site admin.');
    }
});
exports.message_delete = message_delete;
