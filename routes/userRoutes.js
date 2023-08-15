import express from 'express';
import {
  user_get_sign_up,
  user_get_log_in,
  user_post,
} from '../controllers/userController.js';
import { signUpValidation, validate } from '../middleware/validator.js';
import passport from '../middleware/pasport.js';

const routes = express.Router();

routes.get('/sign-up', user_get_sign_up);

routes.post('/sign-up', signUpValidation(), validate, user_post);

routes.get('/log-in', user_get_log_in);

routes.post(
  '/log-in',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/user/log-in',
    failureMessage: true,
  })
);

export default routes;
