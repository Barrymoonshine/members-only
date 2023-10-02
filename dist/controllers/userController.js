"use strict";
// import { Request, Response } from 'express';
// import bcrypt from 'bcryptjs';
// import User from '../models/user.js';
// export const user_get_sign_up = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {
//   try {
//     res.render('user/sign-up', {
//       script: 'sign-up',
//       style: 'sign-up',
//       user: req.user,
//     });
//   } catch {
//     res
//       .status(500)
//       .json(
//         'An internal server error occurred, please try again or if the issue persists contact the site admin.'
//       );
//   }
// };
// export const user_get_log_in = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {
//   try {
//     res.render('user/log-in', {
//       script: null,
//       style: 'log-in',
//       failureMessage: req.session.messages,
//       user: req.user,
//     });
//   } catch {
//     res
//       .status(500)
//       .json(
//         'An internal server error occurred when logging you in, please try again or if the issue persists contact the site admin.'
//       );
//   }
// };
// export const user_post_sign_up = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {
//   try {
//     const hashedPassword = await bcrypt.hash(req.body.password, 10);
//     // Membership status initially false, as users must become members via the join-us view
//     const user = new User({
//       ...req.body,
//       password: hashedPassword,
//       isMember: false,
//     });
//     // Delete confirm password as not needed in DB
//     delete user.confirmPassword;
//     await user.save();
//     res.json({ redirect: '/' });
//   } catch {
//     res
//       .status(500)
//       .json(
//         'An internal server error occurred when signing you in, please try again or if the issue persists contact the site admin.'
//       );
//   }
// };
// export const user_get_join_us = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {
//   try {
//     res.render('user/join-us', {
//       script: 'join-us',
//       style: 'join-us',
//       user: req.user,
//     });
//   } catch {
//     res
//       .status(500)
//       .json(
//         'An internal server error occurred, please try again or if the issue persists contact the site admin.'
//       );
//   }
// };
// export const user_put_join_us = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {
//   try {
//     await User.findByIdAndUpdate(req.user._id, { isMember: true });
//     res.json({ redirect: '/' });
//   } catch {
//     res
//       .status(500)
//       .json(
//         'An internal server error occurred, please try again or if the issue persists contact the site admin.'
//       );
//   }
// };
// export const user_get_my_account = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {
//   try {
//     res.render('user/my-account', {
//       script: 'my-account',
//       style: 'my-account',
//       user: req.user,
//     });
//   } catch {
//     res
//       .status(500)
//       .json(
//         'An internal server error occurred, please try again or if the issue persists contact the site admin.'
//       );
//   }
// };
// export const user_put_admin = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {
//   try {
//     await User.findByIdAndUpdate(req.user._id, { isAdmin: true });
//     res.json({ redirect: '/' });
//   } catch {
//     res
//       .status(500)
//       .json(
//         'An internal server error occurred, please try again or if the issue persists contact the site admin.'
//       );
//   }
// };
