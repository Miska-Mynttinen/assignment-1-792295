const mongoose = require('mongoose');

async function connectToMongoDB() {
  try {
    // Connect to MongoDB
    //mongoose.connect(`mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@mongo:27017/`)
    mongoose.connect(`mongodb://root:password@mongo:27017/`);

    // Handle MongoDB connection events
    const mongoDBConnection = mongoose.connection;

    mongoDBConnection.on('error', (error) => {
      console.error('Error connecting to mysimbdp-coredms (MongoDB):', error.message);
    });

    return new Promise((resolve, reject) => {
      mongoDBConnection.once('open', () => {
        console.log('Connected to mysimbdp-coredms (MongoDB)');
        if (mongoDBConnection.readyState === 1) {
          resolve(mongoDBConnection);
        } else {
          reject(new Error('MongoDB connection not ready'));
        }
      });
    });
  } catch (error) {
    console.error('Error connecting to mysimbdp-coredms (MongoDB):', error.message);
    throw error;
  }
}

module.exports = connectToMongoDB;
