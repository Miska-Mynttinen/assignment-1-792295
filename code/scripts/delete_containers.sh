#!/bin/bash

# Stop all containers
docker-compose stop

echo "Stopped containers."

docker-compose down

# List all containers
docker ps

echo "Deleted containers."