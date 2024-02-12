import { Kafka } from 'kafkajs';

const kafka = new Kafka({
    clientId: 'mysimbdp',
    brokers: ['localhost:9092', 'localhost:9093', 'localhost:9094']
});

const consume = async (topic, groupId) => {
    const consumer = kafka.consumer({ groupId: groupId });
    try {
        await consumer.connect();
        await consumer.subscribe({ topic: topic, fromBeginning: true });
        await consumer.run({
            eachMessage: async ({ topic, partition, message }) => {
                const value = message.value.toString();
                console.log(value);
            },
        });
    } catch (error) {
        console.error(error);
    }
};

export default consume;
