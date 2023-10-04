import { check, validationResult } from 'express-validator';
import { NextFunction, Request, Response } from 'express';

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
  check('isAdmin')
    .isBoolean()
    .notEmpty()
    .withMessage('Please select an Admin status'),
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

export const validate = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  res.status(422).json(errors.array());
};
