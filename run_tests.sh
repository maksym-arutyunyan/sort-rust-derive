#!/bin/bash

# Fail on any error
set -e

# Build the Docker image
docker build -t rust-derive-sorter .

# Run the tests inside the Docker container
docker run --rm -v "$PWD":/usr/src/app rust-derive-sorter npm test
