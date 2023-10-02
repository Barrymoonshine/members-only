"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const validator_js_1 = require("../middleware/validator.js");
const pasport_1 = require("../middleware/pasport");
const routes = express_1.default.Router();
routes.get('/sign-up', userController_1.user_get_sign_up);
routes.post('/sign-up', (0, validator_js_1.signUpValidation)(), validator_js_1.validate, userController_1.user_post_sign_up);
routes.get('/log-in', userController_1.user_get_log_in);
routes.post('/log-in', pasport_1.passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/user/log-in',
    failureMessage: true,
}));
routes.get('/join-us', userController_1.user_get_join_us);
routes.put('/join-us', (0, validator_js_1.joinUsValidation)(), validator_js_1.validate, userController_1.user_put_join_us);
routes.get('/my-account', userController_1.user_get_my_account);
routes.post('/log-out', (0, pasport_1.logOut)());
routes.put('/make-admin', userController_1.user_put_admin);
exports.default = routes;
