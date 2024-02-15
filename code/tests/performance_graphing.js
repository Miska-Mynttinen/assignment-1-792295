const nodeplotlib = require('nodeplotlib');

async function loadIterationTimesFromFile() {
    const data = await fs.readFile('iterationTimes.json');
    return JSON.parse(data);
}

function plotGraph(iterationTimes) {
    const data = [{ x: Array.from({ length: iterationTimes.length }, (_, i) => i + 1), y: iterationTimes, type: 'scatter', name: 'Iteration Time (ms)' }];
    
    nodeplotlib.plot(data);
}