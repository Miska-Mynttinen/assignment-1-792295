#!/bin/bash

# Source: https://github.com/katyagorshkova/kafka-kraft

file_path="/tmp/clusterID/clusterID"

if [ ! -f "$file_path" ]; then
  /bin/kafka-storage random-uuid > /tmp/clusterID/clusterID
  echo "Kafka cluster id has been created..."
fi