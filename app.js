import express from 'express';
import 'dotenv/config';
import mongoose from 'mongoose';
import passport from 'passport';
import session from 'express-session';
import userRoutes from './routes/userRoutes.js';
import messageRoutes from './routes/messageRoutes.js';
import Message from './models/message.js';

const app = express();

const dbURI = `mongodb+srv://${process.env.DB_CREDENTIALS}@cluster0.wym9xjg.mongodb.net/members-only?retryWrites=true&w=majority`;

const connectToDb = async () => {
  try {
    await mongoose.connect(dbURI);
    app.listen(3000, '0.0.0.0', () => {
      console.log('Server is listening on port 3000');
    });
  } catch (err) {
    console.log(`Mongoose connection error: ${err}`);
  }
};
connectToDb();

app.set('view engine', 'ejs');

app.use(session({ secret: 'cats', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use('/user', userRoutes);
app.use('/message', messageRoutes);

app.get('/', async (req, res) => {
  try {
    const messages = await Message.find().sort({
      createdAt: -1,
    });
    res.render('home', { script: null, user: req.user, messages });
  } catch (err) {
    console.log(`Mongoose find error: ${err}`);
  }
});
