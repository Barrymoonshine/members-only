var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import bcrypt from 'bcryptjs';
import User from '../models/user.js';
export const user_get_sign_up = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.render('user/sign-up', {
            script: 'sign-up',
            style: 'sign-up',
            user: req.user,
        });
    }
    catch (_a) {
        res
            .status(500)
            .json('An internal server error occurred, please try again or if the issue persists contact the site admin.');
    }
});
export const user_get_log_in = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.render('user/log-in', {
            script: null,
            style: 'log-in',
            failureMessage: req.session.messages,
            user: req.user,
        });
    }
    catch (_b) {
        res
            .status(500)
            .json('An internal server error occurred when logging you in, please try again or if the issue persists contact the site admin.');
    }
});
export const user_post_sign_up = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const hashedPassword = yield bcrypt.hash(req.body.password, 10);
        // Membership status initially false, as users must become members via the join-us view
        const user = new User(Object.assign(Object.assign({}, req.body), { password: hashedPassword, isMember: false }));
        // Delete confirm password as not needed in DB
        delete user.confirmPassword;
        yield user.save();
        res.json({ redirect: '/' });
    }
    catch (_c) {
        res
            .status(500)
            .json('An internal server error occurred when signing you in, please try again or if the issue persists contact the site admin.');
    }
});
export const user_get_join_us = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.render('user/join-us', {
            script: 'join-us',
            style: 'join-us',
            user: req.user,
        });
    }
    catch (_d) {
        res
            .status(500)
            .json('An internal server error occurred, please try again or if the issue persists contact the site admin.');
    }
});
export const user_put_join_us = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield User.findByIdAndUpdate(req.user._id, { isMember: true });
        res.json({ redirect: '/' });
    }
    catch (_e) {
        res
            .status(500)
            .json('An internal server error occurred, please try again or if the issue persists contact the site admin.');
    }
});
export const user_get_my_account = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.render('user/my-account', {
            script: 'my-account',
            style: 'my-account',
            user: req.user,
        });
    }
    catch (_f) {
        res
            .status(500)
            .json('An internal server error occurred, please try again or if the issue persists contact the site admin.');
    }
});
export const user_put_admin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield User.findByIdAndUpdate(req.user._id, { isAdmin: true });
        res.json({ redirect: '/' });
    }
    catch (_g) {
        res
            .status(500)
            .json('An internal server error occurred, please try again or if the issue persists contact the site admin.');
    }
});
