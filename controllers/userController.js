import bcrypt from 'bcryptjs';
import User from '../models/user.js';

const user_get_sign_up = async (req, res) => {
  try {
    res.render('user/sign-up', { script: 'sign-up', user: req.user });
  } catch (err) {
    console.log(`Mongoose find error: ${err}`);
  }
};

const user_get_log_in = async (req, res) => {
  try {
    res.render('user/log-in', {
      script: null,
      failureMessage: req.session.messages,
      user: req.user,
    });
  } catch (err) {
    console.log(`Mongoose find error: ${err}`);
  }
};

const user_post_sign_up = async (req, res) => {
  try {
    const isAdmin = req.body.isAdmin === 'on';

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    // Membership status initially false, as users must become members via the join-us view
    const user = new User({
      ...req.body,
      password: hashedPassword,
      isAdmin,
      isMember: false,
    });

    // Delete confirm password as not needed in DB
    delete user.confirmPassword;
    await user.save();
    res.json({ redirect: '/' });
  } catch (err) {
    console.log(`user_post error: ${err}`);
  }
};

const user_get_join_us = async (req, res) => {
  try {
    res.render('user/join-us', { script: 'join-us', user: req.user });
  } catch (err) {
    console.log(`Mongoose find error: ${err}`);
  }
};

const user_put_join_us = async (req, res) => {
  try {
    console.log('req.user._id', req.user._id);
    await User.findByIdAndUpdate(req.user._id, { isMember: true });
    res.json({ redirect: '/' });
  } catch (err) {
    console.log(`Mongoose find error: ${err}`);
  }
};

export {
  user_get_sign_up,
  user_get_log_in,
  user_post_sign_up,
  user_get_join_us,
  user_put_join_us,
};
