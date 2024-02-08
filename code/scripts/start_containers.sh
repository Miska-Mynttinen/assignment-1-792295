#!/bin/bash

# Start all containers defined in docker-compose.yml
docker-compose -f code/docker-compose.yml up -d

echo "Started all containers."