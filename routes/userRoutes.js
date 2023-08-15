import express from 'express';
import {
  user_get_sign_up,
  user_get_log_in,
  user_post_sign_up,
  user_get_join_us,
  user_post_join_us,
  user_post_join_us,
} from '../controllers/userController.js';
import {
  signUpValidation,
  joinUsValidation,
  validate,
} from '../middleware/validator.js';
import passport from '../middleware/pasport.js';

const routes = express.Router();

routes.get('/sign-up', user_get_sign_up);

routes.post('/sign-up', signUpValidation(), validate, user_post_sign_up);

routes.get('/log-in', user_get_log_in);

routes.post(
  '/log-in',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/user/log-in',
    failureMessage: true,
  })
);

routes.get('/join-us', user_get_join_us);

routes.post('/join-us', joinUsValidation(), validate, user_post_join_us);

export default routes;
