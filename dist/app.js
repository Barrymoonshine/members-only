var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from 'express';
import 'dotenv/config';
import mongoose from 'mongoose';
import passport from 'passport';
import session from 'express-session';
import indexRoutes from './routes/indexRoutes';
import userRoutes from './routes/userRoutes';
import messageRoutes from './routes/messageRoutes';
const app = express();
const dbURI = `mongodb+srv://${process.env.DB_CREDENTIALS}@cluster0.wym9xjg.mongodb.net/members-only?retryWrites=true&w=majority`;
const connectToDb = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose.connect(dbURI);
        app.listen(3000, '0.0.0.0', () => {
            console.log('Server is listening on port 3000');
        });
    }
    catch (err) {
        console.log(`Mongoose connection error: ${err}`);
    }
});
connectToDb();
app.use(session({ secret: 'cats', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use('/', indexRoutes);
app.use('/user', userRoutes);
app.use('/message', messageRoutes);
