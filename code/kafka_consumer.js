require('axios');
const { Kafka } = require('kafkajs');
const { create } = require('./dataService');


const kafka = new Kafka({
    clientId: 'mysimbdp',
    brokers: ['192.168.1.97:9092', '192.168.1.97:9093', '192.168.1.97:9094']
    //brokers: ['192.168.208.3:9092', '192.168.208.5:9093', '192.168.208.6:9094']
    //brokers: ['kafka0:9092', 'kafka1:9093', 'kafka2:9094']
    //brokers: ['kafka0', 'kafka1', 'kafka2']
    //brokers: ['9092', '9093', '9094']
    //brokers: ['localhost:9092', 'localhost:9093', 'localhost:9094']
});

/*const connectToMongo = async () => {
    mongoose.connect(`mongodb://root:password@mongo:27017/`)
        .then(() => {
            console.log('connected to mysimbdp-coredms (MongoDB)')
        })
        .catch((error) => {
            console.log('error connection to mysimbdp-coredms (MongoDB):', error.message)
        });
}*/

const consume = async (topic, groupId) => {
    const consumer = kafka.consumer({ groupId: groupId });
    try {
        await consumer.connect();
        await consumer.subscribe({ topic: topic, fromBeginning: true });
        await consumer.run({
            eachMessage: async ({ topic, partition, message }) => {
                const data = JSON.parse(message.value.toString())
                console.log('\ndata',data);
                console.log('\n');
                await create(data);
            },
        });
    } catch (error) {
        console.error(error);
    }
};

module.exports = consume;
