import express from 'express';
import 'dotenv/config';

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

// Middleware & static files
app.use(express.static('public'));

// Render a view
app.get('/', (req, res) => {
  res.render('index');
});
