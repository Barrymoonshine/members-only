import { Request, Response } from 'express';
import Message from '../models/message';

const get_home_page = async (req: Request, res: Response): Promise<void> => {
  try {
    const messages = await Message.find().sort({
      createdAt: -1,
    });
    res.json(messages);
  } catch (err) {
    res.status(500).json('Server error');
  }
};

export default get_home_page;
