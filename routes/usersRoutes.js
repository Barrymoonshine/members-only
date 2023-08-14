import express from 'express';
import { add_user } from '../controllers/usersController.js';

const routes = express.Router();

routes.get('/sign-up', add_user);

export default routes;
