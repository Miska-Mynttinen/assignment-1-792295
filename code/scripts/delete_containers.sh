#!/bin/bash

# Stop all containers
docker-compose stop

echo "Stopped containers."

docker-compose down

# Remove the generated Kafka cluster ID file if it exists
#if [ -e clusterID ]; then
#    rm -rf clusterID
#    echo "Removed the Kafka cluster ID file."
#else
#    echo "No Kafka cluster ID file found."
#fi

# List all containers
docker ps

echo "Deleted containers."