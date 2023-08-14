import express from 'express';
import { user_get_sign_up, user_post } from '../controllers/userController.js';
import { signUpValidation, validate } from '../middleware/validator.js';

const routes = express.Router();

routes.get('/sign-up', user_get_sign_up);

routes.post('/sign-up', signUpValidation(), validate, user_post);

export default routes;
