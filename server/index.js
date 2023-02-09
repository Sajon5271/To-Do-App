const express = require('express');
const cors = require('cors');
const router = require('./router');
const mongoose = require('mongoose');

const databaseUrl = 'mongodb://localhost:27017/to-do-database';

const app = express();
app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use(
  '/',
  router
)(async function bootstrap() {
  try {
    await mongoose.connect(databaseUrl);
    console.log('Database Connected');
    app.listen(3000, () =>
      console.log('Server Listening at http://localhost/3000')
    );
  } catch (error) {
    console.log(error);
  }
})();
