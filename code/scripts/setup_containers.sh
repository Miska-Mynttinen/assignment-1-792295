#!/bin/bash

# Setup and start all containers defined in docker-compose.yml
echo "Setting up containers."
docker-compose -f code/docker-compose.yml up -d

# List all containers
docker-compose -f code/docker-compose.yml ps

echo "Setup complete."