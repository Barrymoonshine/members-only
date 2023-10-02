var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Message from '../models/message.js';
export const message_get_create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.render('message/create', {
            script: 'create',
            style: 'create',
            user: req.user,
        });
    }
    catch (_a) {
        res
            .status(500)
            .json('An internal server error occurred, please try again or if the issue persists contact the site admin.');
    }
});
export const message_post_create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const message = new Message(req.body);
        yield message.save();
        res.json({ redirect: '/' });
    }
    catch (_b) {
        res
            .status(500)
            .json('An internal server error occurred when creating a post, please try again or if the issue persists contact the site admin.');
    }
});
export const message_delete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Message.findByIdAndDelete(req.body._id);
        res.json({ redirect: '/' });
    }
    catch (_c) {
        res
            .status(500)
            .json('An internal server error occurred when deleting a post, please try again or if the issue persists contact the site admin.');
    }
});
