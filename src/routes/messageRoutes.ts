import express from 'express';
import get_all_messages from '../controllers/messageController';
// import { messageValidation, validate } from '../middleware/validator';

const routes = express.Router();

routes.get('/', get_all_messages);

// routes.get('/create', message_get_create);

// routes.post('/create', messageValidation(), validate, message_post_create);

// routes.post('/delete', message_delete);

export default routes;
