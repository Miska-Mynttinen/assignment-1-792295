#!/bin/bash

# Build Dockerfile image
# docker build -t mysimbdp-image .

# Setup and start all containers defined in docker-compose.yml
echo "Setting up containers."
docker-compose -f docker-compose.yml up -d

# List all containers
docker-compose -f docker-compose.yml ps

echo "Setup complete."