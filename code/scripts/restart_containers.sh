#!/bin/bash

# Restart all containers defined in docker-compose.yml
docker-compose -f docker-compose.yml restart

# Remove generated Kafka cluster ID file
rm -rf clusterID

echo "Restarted all containers."