import { check, validationResult } from 'express-validator';

export const signUpValidation = () => [
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

export const joinUsValidation = () => [
  check('riddle')
    .isString()
    .notEmpty()
    .custom((value) => {
      if (value.toLowerCase() === 'friend') {
        return true;
      }
      return false;
    })
    .withMessage('You shall not pass!'),
];

export const messageValidation = () => [
  check('message').isString().notEmpty().withMessage('Please enter a message'),
];

export const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  return res.status(422).json(errors.array());
};
