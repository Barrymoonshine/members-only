import express from 'express';
import {
  log_in,
  log_in_failure,
  sign_up,
  join_us,
  toggle_admin,
} from '../controllers/userController';
import {
  signUpValidation,
  joinUsValidation,
  validate,
} from '../middleware/validator.js';
import passport from '../middleware/passport';

const routes = express.Router();

routes.post(
  '/',
  passport.authenticate('local', {
    failureRedirect: '/user/failure',
  }),
  log_in
);

routes.get('/failure', log_in_failure);

routes.post('/new', signUpValidation(), validate, sign_up);

routes.patch('/', joinUsValidation(), validate, join_us);

routes.patch('/admin', toggle_admin);

export default routes;
