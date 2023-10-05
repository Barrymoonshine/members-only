import { Request, Response } from 'express';
import Message from '../models/message';

export const get_all_messages = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const messages = await Message.find().sort({
      createdAt: -1,
    });
    res.json(messages);
  } catch (err) {
    res.status(500).json('Server error');
  }
};

export const create_message = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const message = new Message(req.body);
    await message.save();
    const messages = await Message.find().sort({
      createdAt: -1,
    });
    res.json(messages);
  } catch {
    res
      .status(500)
      .json(
        'An internal server error occurred when creating a post, please try again or if the issue persists contact the site admin.'
      );
  }
};

export const delete_message = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    await Message.findByIdAndDelete(id);
    res.json('Success, message delete');
  } catch {
    res
      .status(500)
      .json(
        'An internal server error occurred when deleting a post, please try again or if the issue persists contact the site admin.'
      );
  }
};
