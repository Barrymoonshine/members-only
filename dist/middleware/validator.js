"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = exports.messageValidation = exports.joinUsValidation = exports.signUpValidation = void 0;
const express_validator_1 = require("express-validator");
const signUpValidation = () => [
    (0, express_validator_1.check)('firstName')
        .isString()
        .notEmpty()
        .withMessage('Please enter a valid first name'),
    (0, express_validator_1.check)('lastName')
        .isString()
        .notEmpty()
        .withMessage('Please enter a valid last name'),
    (0, express_validator_1.check)('username')
        .isString()
        .notEmpty()
        .withMessage('Please enter a valid last name'),
    (0, express_validator_1.check)('password')
        .isString()
        .notEmpty()
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,20}$/)
        .withMessage('Please enter a valid password'),
    (0, express_validator_1.check)('isAdmin')
        .isBoolean()
        .notEmpty()
        .withMessage('Please select an Admin status'),
];
exports.signUpValidation = signUpValidation;
const joinUsValidation = () => [
    (0, express_validator_1.check)('riddle')
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
exports.joinUsValidation = joinUsValidation;
const messageValidation = () => [
    (0, express_validator_1.check)('title').isString().notEmpty().withMessage('Please enter a title'),
    (0, express_validator_1.check)('message').isString().notEmpty().withMessage('Please enter a message'),
];
exports.messageValidation = messageValidation;
const validate = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (errors.isEmpty()) {
        return next();
    }
    res.status(422).json(errors.array());
};
exports.validate = validate;
