import Users from '../models/users.js';

const add_user = async (req, res) => {
  try {
    res.render('users/sign-up', {});
  } catch (err) {
    console.log(`Mongoose find error: ${err}`);
  }
};

export { add_user };
