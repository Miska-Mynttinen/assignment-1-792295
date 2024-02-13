const Data = require('../dataModel.js');
const produce = require('../kafka_producer.js');
const consume = require('../kafka_consumer.js');

async function runTest() {
    const testData = {
        id: 19195987458,
        sampling_rate: null,
        timestamp: '2024-02-12 18:04:02',
        location: {
        id: 72428,
        latitude: '41.978',
        longitude: '21.464',
        altitude: '241.2',
        country: 'MK',
        exact_location: 0,
        indoor: 0
        },
        sensor: {
            id: 82705,
            pin: '1',
            sensor_type: {
                id: 14,
                name: 'SDS011',
                manufacturer: 'Nova Fitness'
            }
        },
        sensordatavalues: [
            { id: 43583940173, value: '148.60', value_type: 'P1' },
            { id: 43583940174, value: '68.40', value_type: 'P2' }
        ]
    };

    try {
        // Produce data to Kafka topic
        await produce('test-topic', [{ value: JSON.stringify(testData) }]);

        // Consume data from Kafka topic
        await consume('test-topic', 'test-group');

        // Wait for data to be ingested into MongoDB
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Check if data is ingested into MongoDB
        const result = await Data.findOne({ id: testData.id });
        if (!result) {
        throw new Error('Data not found in MongoDB');
        }
        // Compare ingested data with test data
        if (!isEqual(result.toObject(), testData)) {
        throw new Error('Ingested data does not match test data');
        }
    } catch (error) {
        // Handle any errors during the test
        throw new Error(`Test failed: ${error.message}`);
    }
};
  
function isEqual(obj1, obj2) {
return JSON.stringify(obj1) === JSON.stringify(obj2);
}

runTest();