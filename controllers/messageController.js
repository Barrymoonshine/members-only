import Message from '../models/message.js';

export const message_get_create = async (req, res) => {
  try {
    res.render('message/create', {
      script: 'create',
      style: 'create',
      user: req.user,
    });
  } catch (err) {
    res
      .status(500)
      .json(
        'An internal server error occurred, please try again or if the issue persists contact the site admin.'
      );
  }
};

export const message_post_create = async (req, res) => {
  try {
    const message = new Message(req.body);
    await message.save();
    res.json({ redirect: '/' });
  } catch (err) {
    res
      .status(500)
      .json(
        'An internal server error occurred when creating a post, please try again or if the issue persists contact the site admin.'
      );
  }
};

export const message_delete = async (req, res) => {
  try {
    await Message.findByIdAndDelete(req.body._id);
    res.json({ redirect: '/' });
  } catch (err) {
    res
      .status(500)
      .json(
        'An internal server error occurred when deleting a post, please try again or if the issue persists contact the site admin.'
      );
  }
};
