const axios = require('axios');
const fs = require('fs').promises;
const { getAll, getOne, getTestSourceData } = require('../dataService.js');
const produce = require('../kafka_producer.js');
const consume = require('../kafka_consumer.js');
const nodeplotlib = require('nodeplotlib');



async function runPerformanceTest() {

    const testData = await getTestSourceData();

    const startTime = Date.now();

    await produce('test-topic', [{ value: JSON.stringify(testData) }]);

    await consume('test-topic', 'test-group');
    
    await wait(10000); // Wait for data to be ingested into MongoDB
    
    const result = await getOne(testData[0].id); // Assuming the first data point is used for testing
    if (!result || !isEqual(result.toObject(), testData[0])) {
        throw new Error('Performance test failed');
    }
    
    const endTime = Date.now();
    const iterationTime = endTime - startTime;
    iterationTimes.push(iterationTime);
    
    await saveIterationTimes(iterationTimes); // Save iteration times to a file
    plotGraph(iterationTimes);
}

async function saveIterationTimes(iterationTimes) {
    await fs.writeFile('iterationTimes.json', JSON.stringify(iterationTimes));
}

async function loadIterationTimesFromFile() {
    const data = await fs.readFile('iterationTimes.json');
    return JSON.parse(data);
}

function plotGraph(iterationTimes) {
    const data = [{ x: Array.from({ length: iterationTimes.length }, (_, i) => i + 1), y: iterationTimes, type: 'scatter', name: 'Iteration Time (ms)' }];
    
    nodeplotlib.plot(data);
}

// Rest of the code remains unchanged

// Define the number of iterations for the performance test
const iterations = 10;

// Run the performance test
runPerformanceTest(iterations)
    .then(() => console.log('Performance test completed successfully'))
    .catch(error => console.error('Performance test failed:', error));
