import express from 'express';
import { log_in, log_in_failure } from '../controllers/userController';
// import {
//   signUpValidation,
//   joinUsValidation,
//   validate,
// } from '../middleware/validator.js';
import passport from '../middleware/passport';

const routes = express.Router();

routes.post(
  '/',
  passport.authenticate('local', {
    failureMessage: true,
    failureRedirect: '/user/failure',
  }),
  log_in
);

routes.get('/failure', log_in_failure);

// routes.get('/sign-up', user_get_sign_up);

// routes.post('/sign-up', signUpValidation(), validate, user_post_sign_up);

// routes.get('/join-us', user_get_join_us);

// routes.put('/join-us', joinUsValidation(), validate, user_put_join_us);

// routes.get('/my-account', user_get_my_account);

// routes.put('/make-admin', user_put_admin);

export default routes;
