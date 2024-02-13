#!/bin/bash

# Start all containers defined in docker-compose.yml
docker-compose -f docker-compose.yml up -d

# List all containers
docker-compose -f docker-compose.yml ps

echo "Started all containers."