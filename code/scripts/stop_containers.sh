#!/bin/bash

# Stop all containers defined in docker-compose.yml
docker-compose -f docker-compose.yml down

# Remove generated Kafka cluster ID file
rm -rf clusterID

echo "Stopped all containers."