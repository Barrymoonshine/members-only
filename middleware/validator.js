import { check, validationResult } from 'express-validator';

const signUpValidation = () => [
  check('firstName')
    .isString()
    .notEmpty()
    .withMessage('Please enter a valid first name'),
  check('lastName')
    .isString()
    .notEmpty()
    .withMessage('Please enter a valid last name'),
  check('username')
    .isString()
    .notEmpty()
    .withMessage('Please enter a valid last name'),
  check('password')
    .isString()
    .notEmpty()
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,20}$/)
    .withMessage('Please enter a valid password'),
  check('confirmPassword')
    .isString()
    .notEmpty()
    .custom((value, { req }) => {
      if (value === req.body.password) {
        return true;
      }
      return false;
    })
    .withMessage('Passwords do not match'),
];

const joinUsValidation = () => [
  check('riddle')
    .isString()
    .notEmpty()
    .custom((value) => {
      if (value === 'friend' || value === 'Friend') {
        return true;
      }
      return false;
    })
    .withMessage('You shall not pass!'),
];

const messageValidation = () => [
  check('post').isString().notEmpty().withMessage('Please enter a post'),
];

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  return res.status(422).json(errors.array());
};

export { signUpValidation, joinUsValidation, messageValidation, validate };
