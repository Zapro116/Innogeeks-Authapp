const express = require('express');
const app = express();
const mongoose = require('mongoose');

const cors = require('cors');
const helmet = require('helmet');
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors());

// http://localhost:3000/user/

app.use('/user', require('./routes/user'));

app.get('/', (req, res) => {
  res.send('<center><h1>Welcome to the Capstone Project</h1></center>');
});

app.listen(port, (e) => {
  console.log('Connected to port : ' + port);

  mongoose
    .connect('mongodb://localhost/capstone')
    .then((result) => {
      console.log('Database capstone');
    })
    .catch((e) => {
      console.log('Database connection failed');
      console.log(e);
    });
});
