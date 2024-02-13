#!/bin/bash

# Stop all containers defined in docker-compose.yml
docker-compose -f docker-compose.yml down

# Remove the generated Kafka cluster ID file if it exists
if [ -e clusterID ]; then
    rm -rf clusterID
    echo "Removed the Kafka cluster ID file."
else
    echo "No Kafka cluster ID file found."
fi

# List all containers
docker-compose -f docker-compose.yml ps

echo "Deleted containers."