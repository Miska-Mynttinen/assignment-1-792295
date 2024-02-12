const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const produce = require('kafka_producer.js');
const consume = require('kafka_consumer.js');
const dataRouter = require('./dataRouter')
require('express-async-errors');
require('dotenv').config()

const PORT = 27017;
const mysimbdp = express();

// middleware declaration
mysimbdp.use(bodyParser.json());
mysimbdp.use(bodyParser.urlencoded({ extended: true }));
mysimbdp.use(cors());
mysimbdp.use(express.json());

console.log('connecting to mysimbdp-coredms (MongoDB)');

mongoose.connect(`mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_USERNAME}@database:${PORT}/`)
  .then(() => {
    console.log('connected to mysimbdp-coredms (MongoDB)')
  })
  .catch((error) => {
    console.log('error connection to mysimbdp-coredms (MongoDB):', error.message)
  });

// Route
mysimbdp.use('/api/data', dataRouter);

mysimbdp.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});