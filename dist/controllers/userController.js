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
exports.sign_up = exports.log_in_failure = exports.log_in = void 0;
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
        res.json('Success user signed up');
    }
    catch (_c) {
        res
            .status(500)
            .json('An internal server error occurred when signing you in, please try again or if the issue persists contact the site admin.');
    }
});
exports.sign_up = sign_up;
// export const user_get_join_us = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {
//   try {
//     res.render('user/join-us', {
//       script: 'join-us',
//       style: 'join-us',
//       user: req.user,
//     });
//   } catch {
//     res
//       .status(500)
//       .json(
//         'An internal server error occurred, please try again or if the issue persists contact the site admin.'
//       );
//   }
// };
// export const user_put_join_us = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {
//   try {
//     await User.findByIdAndUpdate(req.user._id, { isMember: true });
//     res.json({ redirect: '/' });
//   } catch {
//     res
//       .status(500)
//       .json(
//         'An internal server error occurred, please try again or if the issue persists contact the site admin.'
//       );
//   }
// };
// export const user_get_my_account = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {
//   try {
//     res.render('user/my-account', {
//       script: 'my-account',
//       style: 'my-account',
//       user: req.user,
//     });
//   } catch {
//     res
//       .status(500)
//       .json(
//         'An internal server error occurred, please try again or if the issue persists contact the site admin.'
//       );
//   }
// };
// export const user_put_admin = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {
//   try {
//     await User.findByIdAndUpdate(req.user._id, { isAdmin: true });
//     res.json({ redirect: '/' });
//   } catch {
//     res
//       .status(500)
//       .json(
//         'An internal server error occurred, please try again or if the issue persists contact the site admin.'
//       );
//   }
// };
