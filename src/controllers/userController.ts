import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/user.js';

export const log_in = async (req: Request, res: Response): Promise<void> => {
  try {
    res.json(req.user);
  } catch {
    res
      .status(500)
      .json(
        'An internal server error occurred when logging you in, please try again or if the issue persists contact the site admin.'
      );
  }
};

export const log_in_failure = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    res.status(401).json('Invalid username or password');
  } catch {
    res
      .status(500)
      .json(
        'An internal server error occurred, please try again or if the issue persists contact the site admin.'
      );
  }
};

export const sign_up = async (req: Request, res: Response): Promise<void> => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({
      ...req.body,
      password: hashedPassword,
    });
    await user.save();
    res.json(user);
  } catch {
    res
      .status(500)
      .json(
        'An internal server error occurred when signing you in, please try again or if the issue persists contact the site admin.'
      );
  }
};

export const join_us = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await User.findByIdAndUpdate(req.body.id, { isMember: true });
    res.json(user);
  } catch {
    res
      .status(500)
      .json(
        'An internal server error occurred, please try again or if the issue persists contact the site admin.'
      );
  }
};

export const toggle_admin = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    await User.findByIdAndUpdate(req.body.id, {
      isAdmin: req.body.isAdmin,
    });
    res.json('Success Admin status update');
  } catch {
    res
      .status(500)
      .json(
        'An internal server error occurred, please try again or if the issue persists contact the site admin.'
      );
  }
};
