import bcrypt from 'bcryptjs';
import User from '../models/user.js';

const user_get_sign_up = async (req, res) => {
  try {
    res.render('user/sign-up', {});
  } catch (err) {
    console.log(`Mongoose find error: ${err}`);
  }
};

const user_post = async (req, res) => {
  try {
    const isAdmin = req.body.isAdmin === 'on';

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    console.log('hashedPassword', hashedPassword);
    const user = new User({
      ...req.body,
      password: hashedPassword,
      isAdmin,
    });
    console.log('user', user);
    // Delete confirm password as not needed in DB
    delete user.confirmPassword;
    await user.save();
    res.redirect('/');
  } catch (err) {
    console.log(`Mongoose find error: ${err}`);
  }
};

export { user_get_sign_up, user_post };
