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
      user: req.user,
      failureMessage: req.session.messages,
    });
  } catch (err) {
    console.log(`Mongoose find error: ${err}`);
  }
};

const user_post_sign_up = async (req, res) => {
  try {
    const isAdmin = req.body.isAdmin === 'on';

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({
      ...req.body,
      password: hashedPassword,
      isAdmin,
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
    res.render('user/join-us', { script: null, user: req.user });
  } catch (err) {
    console.log(`Mongoose find error: ${err}`);
  }
};

export {
  user_get_sign_up,
  user_get_log_in,
  user_post_sign_up,
  user_get_join_us,
};
