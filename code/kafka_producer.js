import { Kafka } from 'kafkajs';

const kafka = new Kafka({
    clientId: 'mysimbdp',
    brokers: ['localhost:9092', 'localhost:9093', 'localhost:9094']
});

const produce = async (topic, messages) => {
    const producer = kafka.producer();
    try {
        await producer.connect();
        await producer.send({
            topic: topic,
            messages: messages,
        });
    } catch (error) {
        console.error(error);
    } finally {
        await producer.disconnect();
    }
};

export default produce;
