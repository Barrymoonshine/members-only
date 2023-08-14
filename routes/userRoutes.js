import express from 'express';
import { user_get_sign_up, user_post } from '../controllers/userController.js';

const routes = express.Router();

routes.get('/sign-up', user_get_sign_up);

routes.post('/sign-up', user_post);

export default routes;
