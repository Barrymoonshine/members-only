import express from 'express';
import {
  message_get_create,
  message_post_create,
} from '../controllers/messageController.js';
import { messageValidation, validate } from '../middleware/validator.js';

const routes = express.Router();

routes.get('/create', message_get_create);

routes.post('/create', messageValidation(), validate, message_post_create);

export default routes;
