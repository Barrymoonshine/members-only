import Message from '../models/message.js';

const message_get_create = async (req, res) => {
  try {
    res.render('message/create', { script: 'create', user: req.user });
  } catch (err) {
    console.log(`Mongoose find error: ${err}`);
  }
};

const message_post_create = async (req, res) => {
  try {
    const message = new Message(req.body);
    await message.save();
    res.json({ redirect: '/' });
  } catch (err) {
    console.log(`Mongoose find error: ${err}`);
  }
};

export { message_get_create, message_post_create };
