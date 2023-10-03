"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const message_1 = __importDefault(require("../models/message"));
const get_all_messages = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const messages = yield message_1.default.find().sort({
            createdAt: -1,
        });
        res.json(messages);
    }
    catch (err) {
        res.status(500).json('Server error');
    }
});
exports.default = get_all_messages;
// export const message_get_create = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {
//   try {
//     res.render('message/create', {
//       script: 'create',
//       style: 'create',
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
// export const message_post_create = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {
//   try {
//     const message = new Message(req.body);
//     await message.save();
//     res.json({ redirect: '/' });
//   } catch {
//     res
//       .status(500)
//       .json(
//         'An internal server error occurred when creating a post, please try again or if the issue persists contact the site admin.'
//       );
//   }
// };
// export const message_delete = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {
//   try {
//     await Message.findByIdAndDelete(req.body._id);
//     res.json({ redirect: '/' });
//   } catch {
//     res
//       .status(500)
//       .json(
//         'An internal server error occurred when deleting a post, please try again or if the issue persists contact the site admin.'
//       );
//   }
// };
