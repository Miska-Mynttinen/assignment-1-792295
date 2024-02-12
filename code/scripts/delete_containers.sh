#!/bin/bash

# Stop all containers defined in docker-compose.yml
docker-compose -f docker-compose.yml down

# Delete all containers defined in docker-compose.yml
docker rm -f docker-compose.yml down

echo "Stopped all containers."