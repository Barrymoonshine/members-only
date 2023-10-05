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
exports.toggle_admin = exports.join_us = exports.sign_up = exports.log_in_failure = exports.log_in = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const user_js_1 = __importDefault(require("../models/user.js"));
const log_in = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json(req.user);
    }
    catch (_a) {
        res
            .status(500)
            .json('An internal server error occurred when logging you in, please try again or if the issue persists contact the site admin.');
    }
});
exports.log_in = log_in;
const log_in_failure = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(401).json('Invalid username or password');
    }
    catch (_b) {
        res
            .status(500)
            .json('An internal server error occurred, please try again or if the issue persists contact the site admin.');
    }
});
exports.log_in_failure = log_in_failure;
const sign_up = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const hashedPassword = yield bcryptjs_1.default.hash(req.body.password, 10);
        const user = new user_js_1.default(Object.assign(Object.assign({}, req.body), { password: hashedPassword }));
        yield user.save();
        res.json(user);
    }
    catch (_c) {
        res
            .status(500)
            .json('An internal server error occurred when signing you in, please try again or if the issue persists contact the site admin.');
    }
});
exports.sign_up = sign_up;
const join_us = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_js_1.default.findByIdAndUpdate(req.body.id, { isMember: true });
        res.json(user);
    }
    catch (_d) {
        res
            .status(500)
            .json('An internal server error occurred, please try again or if the issue persists contact the site admin.');
    }
});
exports.join_us = join_us;
const toggle_admin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield user_js_1.default.findByIdAndUpdate(req.body.id, {
            isAdmin: req.body.isAdmin,
        });
        res.json('Success Admin status update');
    }
    catch (_e) {
        res
            .status(500)
            .json('An internal server error occurred, please try again or if the issue persists contact the site admin.');
    }
});
exports.toggle_admin = toggle_admin;
