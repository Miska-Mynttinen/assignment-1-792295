# This is a deployment/installation guide
## Deploy
cd code

###### setup containers
bash bash ./scripts/setup_containers.sh

###### open terminal in node app and execute tests
docker exec -it mysimbdp /bin/bash

###### in container shell
npm run test

##### in browser go to localhost:8080 to see mongo-express interface
##### created file is in test



###### also in container shell
npm run plot_graph


###### also in container shell, takes a lot of time
npm run performance_test