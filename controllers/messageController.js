import Message from '../models/message.js';

const message_get_create = async (req, res) => {
  try {
    res.render('message/create', {
      script: 'create',
      style: 'create',
      user: req.user,
    });
  } catch (err) {
    console.log(`message_get_create error: ${err}`);
  }
};

const message_post_create = async (req, res) => {
  try {
    const message = new Message(req.body);
    await message.save();
    res.json({ redirect: '/' });
  } catch (err) {
    console.log(`message_post_create error: ${err}`);
  }
};

const message_delete = async (req, res) => {
  try {
    await Message.findByIdAndDelete(req.body._id);
    res.json({ redirect: '/' });
  } catch (err) {
    console.log(`message_delete error: ${err}`);
  }
};

export { message_get_create, message_post_create, message_delete };
