import { Request, Response } from 'express';
import Message from '../models/message';

const get_all_messages = async (req: Request, res: Response): Promise<void> => {
  try {
    const messages = await Message.find().sort({
      createdAt: -1,
    });
    res.json(messages);
  } catch (err) {
    res.status(500).json('Server error');
  }
};

export default get_all_messages;

// export const message_get_create = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {
//   try {
//     res.render('message/create', {
//       script: 'create',
//       style: 'create',
//       user: req.user,
//     });
//   } catch {
//     res
//       .status(500)
//       .json(
//         'An internal server error occurred, please try again or if the issue persists contact the site admin.'
//       );
//   }
// };

// export const message_post_create = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {
//   try {
//     const message = new Message(req.body);
//     await message.save();
//     res.json({ redirect: '/' });
//   } catch {
//     res
//       .status(500)
//       .json(
//         'An internal server error occurred when creating a post, please try again or if the issue persists contact the site admin.'
//       );
//   }
// };

// export const message_delete = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {
//   try {
//     await Message.findByIdAndDelete(req.body._id);
//     res.json({ redirect: '/' });
//   } catch {
//     res
//       .status(500)
//       .json(
//         'An internal server error occurred when deleting a post, please try again or if the issue persists contact the site admin.'
//       );
//   }
// };
