import express from 'express';
import 'dotenv/config';
import mongoose from 'mongoose';

const app = express();

const dbURI = `mongodb+srv://${process.env.DB_CREDENTIALS}@cluster0.wym9xjg.mongodb.net/?retryWrites=true&w=majority`;

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

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home');
});
