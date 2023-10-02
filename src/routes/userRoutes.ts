import express from 'express';
import {
  user_get_sign_up,
  user_get_log_in,
  user_post_sign_up,
  user_get_join_us,
  user_put_join_us,
  user_get_my_account,
  user_put_admin,
} from '../controllers/userController';
import {
  signUpValidation,
  joinUsValidation,
  validate,
} from '../middleware/validator.js';
import { passport } from '../middleware/passport';

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

routes.put('/join-us', joinUsValidation(), validate, user_put_join_us);

routes.get('/my-account', user_get_my_account);

routes.put('/make-admin', user_put_admin);

export default routes;
