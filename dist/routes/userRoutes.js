"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
// import {
//   signUpValidation,
//   joinUsValidation,
//   validate,
// } from '../middleware/validator.js';
const passport_1 = __importDefault(require("../middleware/passport"));
const routes = express_1.default.Router();
routes.post('/', passport_1.default.authenticate('local', {
    failureMessage: true,
    failureRedirect: '/user/failure',
}), userController_1.log_in);
routes.get('/failure', userController_1.log_in_failure);
// routes.get('/sign-up', user_get_sign_up);
// routes.post('/sign-up', signUpValidation(), validate, user_post_sign_up);
// routes.get('/join-us', user_get_join_us);
// routes.put('/join-us', joinUsValidation(), validate, user_put_join_us);
// routes.get('/my-account', user_get_my_account);
// routes.put('/make-admin', user_put_admin);
exports.default = routes;
