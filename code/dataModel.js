const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
    id: String,
    sampling_rate: String,
    timestamp: String,
    location: {
      id: String,
      latitude: String,
      longitude: String,
      altitude: String,
      country: String,
      exact_location: Number,
      indoor: Number
    },
    sensor: {
      id: String,
      pin: String,
      sensor_type: {
        id: String,
        name: String,
        manufacturer: String
      }
    },
    sensordatavalues: [{
      id: String,
      value: String,
      value_type: String
    }]
  });

dataSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Data', dataSchema)