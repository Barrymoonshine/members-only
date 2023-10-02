import express from 'express';
import get_home_page from '../controllers/indexController';

const routes = express.Router();

routes.get('/', get_home_page);

export default routes;
