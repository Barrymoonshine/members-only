import express from 'express';
import {
  get_all_messages,
  create_message,
  delete_message,
} from '../controllers/messageController';
import { messageValidation, validate } from '../middleware/validator';

const routes = express.Router();

routes.get('/', get_all_messages);

routes.post('/', messageValidation(), validate, create_message);

routes.delete('/:id', delete_message);

export default routes;
