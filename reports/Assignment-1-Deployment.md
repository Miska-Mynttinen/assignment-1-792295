# This is a deployment/installation guide
## Requirements
- Node.js (node version > 14.0.0)

## Deploy
cd code

##### install node package dependencies
npm install

###### setup containers
bash ./scripts/setup_containers.sh

###### test with one file
npm run test

##### in browser go to localhost:8080 to see mongo-express interface
##### created file is in test


##### to check performance plot from previous tests , or just look at /tests/performance_graph.jpeg
npm run plot_graph


###### takes a lot of time
npm run performance_test