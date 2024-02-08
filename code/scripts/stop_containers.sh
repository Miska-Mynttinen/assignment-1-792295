#!/bin/bash

# Stop all containers defined in docker-compose.yml
docker-compose -f code/docker-compose.yml down

echo "Stopped all containers."