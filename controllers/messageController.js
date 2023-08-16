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
    // const newPost = { ...req.body, author: req.user.username };
    // const newPostsArray = [...req.user.posts, newPost];
    // console.log('newPostsArray', newPostsArray);

    // await User.findByIdAndUpdate(req.user._id, { posts: newPostsArray });
    res.json({ redirect: '/' });
  } catch (err) {
    console.log(`Mongoose find error: ${err}`);
  }
};

export { message_get_create, message_post_create };
